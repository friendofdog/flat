const chai = require("chai");
const { expect } = chai;

const {
  getAllProducts,
  getSingleProduct,
  createSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
} = require("../src/stripe/products");

describe("Products", () => {
  describe("getAllProducts", () => {
    it("should return a list of products", async () => {
      await getAllProducts().then((res) => {
        expect(res.data).to.be.an("array");
      });
    });
  });

  describe("getSingleProduct", () => {
    it("should return a single product", async () => {
      await getSingleProduct("prod_IxNsY87n7TRHdE").then((res) => {
        expect(res.object).to.equal("product");
        expect(res.prices).to.be.an("array");
      });
    });
  });

  describe("createSingleProduct", () => {
    it("should return a created product", async () => {
      await createSingleProduct("def", "456", true, "some guy").then((res) => {
        expect(res.name).to.equal("def");
      });
    });
  });

  describe("updateSingleProduct", () => {
    it("should update and return a single product", async () => {
      await updateSingleProduct(
        "prod_IRnOkX1NGpvifh", "hij", "456", false, "another guy"
      ).then((res) => {
        expect(res.name).to.equal("hij");
      });
    });
  });

  describe("deleteSingleProduct", () => {
    it("should delete and return undefiend", async () => {
      await deleteSingleProduct("price_1HqtnxE5rrbCJ30iplebsXL2").then(
        (res) => {
          expect(res.name).to.equal(undefined);
        }
      );
    });
  });
});
