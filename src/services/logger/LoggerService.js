class LoggerService {
  Data = [];

  logData = (status, event) => {
    this.Data.push({
      status: `Status is ${status}`,
      event: `Event is ${event}`,
    });
  };

  get = () => this.Data;
}

const loggerService = new LoggerService();
export default loggerService;
