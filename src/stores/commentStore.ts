import { defineStore } from "pinia";
import { ICommentResponse } from "../models/response/commentResponse";
import axios from "axios";

export const useCommentStore = defineStore("comment", {
  state: () => ({
    comments: [] as ICommentResponse[],
    comment: {} as ICommentResponse,
  }),

  actions: {
    async fetchComments(id: string) {
      try {
        this.comments = [];
        await axios
          .get(`${import.meta.env.VITE_API_URL_BASE}/comments/obtenerPorIncidentes/${id}`).then((data) => {
            this.comments = data.data;
            console.log("-->", this.comments);
          });
      } catch (error) {
        console.error("Error fetching incidents:", error);
      }
    },
  },
});
