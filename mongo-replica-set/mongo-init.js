print("Started Adding the Users.");
db = db.getSiblingDB("tds-db");
db.createUser({
  user: "application",
  pwd: "bitmosys-application",
  roles: [{ role: "readWrite", db: "tds-db" }],
});
print("End Adding the User Roles.");
