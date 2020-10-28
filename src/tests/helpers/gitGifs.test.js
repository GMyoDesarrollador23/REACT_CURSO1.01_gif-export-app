const {
   default: gitGifs,
} = require("../../helpers/getGifs");

describe("Pruebas con gitGifs Fetch", () => {
   // -----------------------------------------------------
   test("debe de teenr 10 elementos", async () => {
      const gits = await gitGifs("inuyasha");
      expect(gits.length).toBe(10);
   });

   // -----------------------------------------------------
   test("debe de teenr 10 elementos", async () => {
      const gits = await gitGifs("");
      // console.log(gits);
      expect(gits.length).toBe(0);
   });
});
