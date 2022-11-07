/* exported student */
var student = {
  firstName: 'Jeff',
  lastName: 'Jin',
  subject: 'JavaScript',
  getFullName: function () {
    var name = this.firstName + ' ' + this.lastName;
    return name;
  },
  getIntroduction: function () {
    var introduction = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' ' + 'and I am studying ' + this.subject + '.';
    return introduction;
  }
};
