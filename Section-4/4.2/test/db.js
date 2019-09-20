// const expect = require('chai').expect;
// const Sequelize = require('sequelize');

// describe('users', () => {
//   let database;
//   let User;

//   // runs before all tests in this block
//   before(async () => {
//     database = new Sequelize('postgresql://localhost/app_test', {
//       logging: false
//     });
//     User = database.define('user', {
//       username: Sequelize.STRING,
//       birthday: Sequelize.DATE
//     });
//   });

//   // runs before each test in this block
//   beforeEach(async () => {
//     await User.sync();
//     await User.create({
//       username: 'zaiste',
//       birthday: new Date(1988, 1, 21)
//     });
//   });

//   // runs after each test in this block
//   afterEach(async () => {
//     await User.drop();
//   });

//   describe('#find()', () => {
//     it('should find a user', async () => {
//       const user = await User.findOne({ where: { username: 'zaiste' } });
//       expect(user).to.be.a('object');
//       expect(user).to.have.property('username');
//       expect(user).to.have.property('birthday');
//       expect(user.username).to.equal('zaiste');
//     });
//   });
// });
