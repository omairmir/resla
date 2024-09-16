const careerService = (api) => ({
    getBoards: async () => {
      return api.request({
        method: 'get',
        url: '/boards/resla',
      });
    },
    
    getDepartments: async () => {
      return api.request({
        method: 'get',
        url: '/boards/resla/departments',
      });
    },
    
    getJobDetails: async (jobId) => {
      return api.request({
        method: 'get',
        url: `/boards/resla/jobs/${jobId}`,
      });
    }
  });
  
  export default careerService;
  