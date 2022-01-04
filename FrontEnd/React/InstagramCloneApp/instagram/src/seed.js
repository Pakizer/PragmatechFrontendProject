export function seedDatabase(firebase) {
  const users = [
    {
      userId: "Vblbz0V4RJTQmV3rHSYfYCsHgOD2",
      username: "pakizar",
      fullName: "Pakizar Masimli",
      emailAddress: "pakizerrmesimli@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "aytac",
      fullName: "Aytac Azerli",
      emailAddress: "aytac@gmail.com",
      following: [""],
      followers: ["Vblbz0V4RJTQmV3rHSYfYCsHgOD2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "gulnar",
      fullName: "Gulnar Musayeva",
      emailAddress: "gulnar@gmail.com",
      following: [],
      followers: ["Vblbz0V4RJTQmV3rHSYfYCsHgOD2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "ruqeyya",
      fullName: "Ruqeyya Qasimli",
      emailAddress: "ruqeyya@gmail.com",
      following: [],
      followers: ["Vblbz0V4RJTQmV3rHSYfYCsHgOD2"],
      dateCreated: Date.now(),
    },
  ];

  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }
}
