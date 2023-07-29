module.exports = class UserDto {
    name;
    email;
    id;
    isActivated;
    activationLink;
    admin;
    progress;

    constructor(model) {
        this.name = model.name;
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.activationLink = model.activationLink;
        this.admin = model.admin;
        this.progress = model.progress;
    }
}