/* eslint-disable no-underscore-dangle */
class RegisteredUser {
  constructor(payload) {
    this._verifypayload(payload);

    const { id, username, fullname } = payload;

    this.id = id;
    this.username = username;
    this.fullname = fullname;
  }

  // eslint-disable-next-line class-methods-use-this
  _verifypayload({ id, username, fullname }) {
    if (!id || !username || !fullname) {
      throw new Error('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof username !== 'string' || typeof fullname !== 'string') {
      throw new Error('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATON');
    }
  }
}

module.exports = RegisteredUser;
