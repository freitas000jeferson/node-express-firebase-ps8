class DataResponse {
  constructor(apiVersion, transactionId, data) {
    this.apiVersion = apiVersion;
    this.transactionId = transactionId;
    this.data = data;
  }
  toMap() {
    return {
      apiVersion: this.apiVersion,
      transactionId: this.transactionId,
      data: { ...this.data },
    };
  }
}

module.exports = DataResponse;
