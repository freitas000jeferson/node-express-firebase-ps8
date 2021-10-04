class Customers {
  constructor(
    personType,
    name,
    birthdate,
    motherName,
    documents,
    addresses,
    socioeconomics,
    customerId,
    status,
    quantityAttemptsRegister
  ) {
    this.personType = personType;
    this.name = name;
    this.birthdate = birthdate;
    this.motherName = motherName;
    this.documents = documents;
    this.addresses = addresses;
    this.socioeconomics = socioeconomics;
    this.customerId = customerId;
    this.status = status;
    this.quantityAttemptsRegister = quantityAttemptsRegister;
  }
}

module.exports = Customers;
