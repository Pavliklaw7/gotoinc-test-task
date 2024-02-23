import type { RequestDto } from '@/models';
import { addToStorage, removeFromStorage } from '@/utils/storage';
import { defineStore } from 'pinia';

const getrequests = () => {
  const requests = localStorage.getItem('requests-list');
  return requests ? JSON.parse(requests) : [];
};
export const useRequestStore = defineStore('requestStore', {
  state: () => ({
    requests: getrequests() as RequestDto[]
  }),
  getters: {
    currentRequest: (state) => {
      return (requestId: string) => state.requests.find((item: RequestDto) => item.id === requestId);
    },
    matchedRequests: (state) => {
      return (request: RequestDto) => {
        return state.requests.filter((item: RequestDto) => {
          if (
            item.originCity === request.originCity &&
            item.targetCity === request.targetCity &&
            item.dispatchDate <= request.dispatchDate &&
            item.id !== request.id
          )
            return item;
        });
      };
    },
    sortedRequests: (state) => {
      return (sortBy: string) => {
        const sorted = state.requests;
        if (sortBy === 'by sending date') {
          sorted.sort((a: RequestDto, b: RequestDto) => {
            return b.dispatchDate - a.dispatchDate;
          });
        } else {
          sorted.sort((a: RequestDto, b: RequestDto) => {
            return b.creationDate - a.creationDate;
          });
        }
        return sorted;
      };
    }
  },
  actions: {
    addRequest(request: any) {
      this.requests.push(request);
      addToStorage('requests-list', request);
    },
    updateRequest(request: any) {
      const index = this.requests.findIndex((item: any) => item.id === request.id);
      this.requests[index] = request;
      localStorage.setItem('requests-list', JSON.stringify(this.requests));
    },
    deleteRequest(requestId: string) {
      this.requests = this.requests.filter((request) => request.id !== requestId);
      removeFromStorage('requests-list', requestId);
    }
  }
});
