import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import { GitExpertApp } from "../GitExpertApp";
describe("Pruebas sobre el <GitExpertApp/>", () => {
   // ------------------------------------------------------
   test("debe mostrarse correctante ", () => {
      const wrapper = shallow(<GitExpertApp />);
      expect(wrapper).toMatchSnapshot();
   });

   // ------------------------------------------------------
   test("debe mostrar una lista de categorias", () => {
      const categories = ["one punch", "dragon ball"];
      const wrapper = shallow(
         <GitExpertApp defaultCategories={categories} />
      );
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find("GifGrid").length).toBe(
         categories.length
      );
   });
});
