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
    incident: {} as IincidentResponse,
  }),

  actions: {
    async fetchIncidents() {
      try {
        this.incidents = [];
        await axios.get(`${import.meta.env.VITE_API_URL_BASE}/incident`, config).then((data) => {
          this.incidents = data.data;
          console.log(JSON.stringify(data.data[0]));
          console.log("-->", this.incidents);
        });
      } catch (error) {
        console.error("Error fetching incidents:", error);
      }
    },

    async fetchIncidetById() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL_BASE}/incident/getIncident/4`, config);
        const data = response.data;
        this.incident = data;
      } catch (error) {
        console.error("Error fetching incidents:", error);
      }
    },

    getTimeUpdatedAgo(incidentCreatedTime: string) {
      const createdTime = new Date(incidentCreatedTime);
      const timeNow = new Date();
      const timePassed = timeNow.getTime() - createdTime.getTime();
      const millisecondsPerHour = 1000 * 60 * 60;
      const hoursPassed = Math.abs(Math.round(timePassed / millisecondsPerHour));

      if (hoursPassed >= 24) {
        const daysPassed = Math.floor(hoursPassed / 24);
        if (daysPassed >= 30) {
          const weeksPassed = Math.floor(daysPassed / 7);
          if (weeksPassed >= 4) {
            const monthsPassed = Math.floor(weeksPassed / 4);
            if (monthsPassed >= 12) {
              const yearsPassed = Math.floor(monthsPassed / 12);
              return yearsPassed + (yearsPassed === 1 ? ' ano' : ' anos');
            }
            return monthsPassed + (monthsPassed === 1 ? ' mês' : ' meses');
          }
          return weeksPassed + (weeksPassed === 1 ? ' semana' : ' semanas');
        }
        return daysPassed + (daysPassed === 1 ? ' dia' : ' dias');
      }
      return hoursPassed + (hoursPassed === 1 ? ' hora' : ' horas');
    }


  },
});
