const team = [
  { name: "Ahmed", role: "Developer", salary: 25000, active: true },
  { name: "Sara", role: "Designer", salary: 22000, active: true },
  { name: "Yusuf", role: "Developer", salary: 28000, active: false },
  { name: "Mariam", role: "Project Manager", salary: 30000, active: true },
  { name: "Hassan", role: "Developer", salary: 26000, active: true }
];

const developers = team.filter(employee => {
  return employee.role === 'Developer';
})

for (let i = 0; i < developers.length; i++) {
  const developerOnly = developers[i].name;
  console.log(developerOnly);
}

