import callback from '../utils/callbackCtrl';

class VehicleController {

  constructor(Vehicle,Driver) {
    this.Vehicle = Vehicle;
    this.Driver = Driver;
  };

  listAll() {
    return this.Vehicle.findAll({where:{},include:[this.Driver]})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message));
  };

  getById(params) {
    return this.Vehicle.findOne({where:params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message));
  };

  create(data) {
    return this.Vehicle.create(data)
      .then(result => callback.defaultResponse(result,201))
      .catch(() => callback.errorResponse(error.message,422));
  };

  update(data,params) {
    return this.Vehicle.update(data,{where:params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message,522));
  };

  remove(params) {
    return this.Vehicle.destroy({where:params})
      .then(result => callback.defaultResponse(result,204))
      .catch(() => callback.errorResponse(error.message,422));
  };
}

export default VehicleController;
