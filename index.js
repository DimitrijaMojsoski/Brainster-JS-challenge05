class Company {
  constructor(name, companyName, jobPosition, salary) {
    this.name = name;
    this.companyName = companyName;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }
}

const firstWorker = new Company(
  "Mike",
  "Coca-Cola",
  "distributor",
  "1000 dollars"
);

const ul = document.createElement("ul");
ul.innerHTML = createListItems(firstWorker);
document.getElementById("companyData").appendChild(ul);

const secondWorker = new Company(
  "Joe",
  "Microsoft",
  "Developer",
  "5000 dollars"
);

const ul2 = document.createElement("ul");
ul2.innerHTML = createListItems(secondWorker);
document.getElementById("companyData2").appendChild(ul2);

function createListItems(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `<li>${key}: ${value}</li>`)
    .join("");
}

const thirdWorker = new Company(
  "Tony",
  "Oxford Unifersity",
  "Teacher",
  "7000 dollars"
);

const ul3 = document.createElement("ul");
ul3.innerHTML = createListItems(thirdWorker);
document.getElementById("companyData2").appendChild(ul3);

function createListItems(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `<li>${key}: ${value}</li>`)
    .join("");
}
