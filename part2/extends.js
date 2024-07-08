class User {
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }

class Admin extends User {
    static role = {BASIC: "basic", SUPERUSER: "superuser"};
}

Admin.role.BASIC;