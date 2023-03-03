
const uuid = require('uuid');
const convertCase = require('js-convert-case');

let usersArray = [
  { uname: "steve jobs", email: "STevE@gmail.com", cardId: "" },
  { uname: "bill gates", email: "bIll@gmaIL.com", cardId: "" },
  { uname: "mark zuckerberg", email: "mark@facebook.com", cardId: "" },
];

for (let user of usersArray) {
  const id = uuid.v4();
  user.cardId = id.toUpperCase();
}

for (let user of usersArray) {
  const userId = convertCase.toHeaderCase(user.uname);
  const userEmail = user.email.toLowerCase();
  const userCardId = user.cardId;
  console.log(`User Id = ${userId}, Email = ${userEmail}, cardId = ${userCardId}`);
}
      