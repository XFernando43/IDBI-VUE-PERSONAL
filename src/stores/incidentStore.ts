import { defineStore } from "pinia";
import { IincidentResponse } from "../models/response/IncidentResponse";
import axios from "axios";

const token = localStorage.getItem('token');
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const useIncidentStore = defineStore("incident", {
  state: () => ({
    incidents: [] as IincidentResponse[],
  }),

  actions: {
    async fetchIncidents() {
        try {
            this.incidents = [];
            await axios.get(`${import.meta.env.VITE_API_URL_BASE}/incident`,config).then((data)=>{
              this.incidents = data.data;
              console.log(JSON.stringify(data.data[0]));
              console.log("-->",this.incidents);
            });
          } catch (error) {
            console.error("Error fetching incidents:", error);
          }
    },
  },
});
