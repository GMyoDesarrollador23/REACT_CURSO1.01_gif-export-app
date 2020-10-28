import React from "react";
import "@testing-library/jest-dom";
const { shallow } = require("enzyme");
const {
   AddCategory,
} = require("../../components/AddCategory");

describe("Pruebas en <AddCategory/>", () => {
   const setCategories = jest.fn();

   let wrapper = shallow(
      <AddCategory setCategories={setCategories} />
   );

   beforeEach(() => {
      jest.clearAllMocks();
      wrapper = shallow(
         <AddCategory setCategories={setCategories} />
      );
   });
   // -----------------------------------------------------------
   test("debe de mostrarse corectamente", () => {
      expect(wrapper).toMatchSnapshot();
   });

   // -----------------------------------------------------------
   test("debe de cambiar la caja de texto", () => {
      const input = wrapper.find("input");

      const value = "hola mundo";

      input.simulate("change", { target: { value } });

      expect(wrapper.find("p").text().trim()).toBe(value);
   });

   // -----------------------------------------------------------
   test("no debe de postear la informacion con OnSubmit", () => {
      wrapper
         .find("form")
         .simulate("submit", { preventDefault() {} });

      expect(setCategories).not.toHaveBeenCalled();
   });

   // -----------------------------------------------------------
   test("debe de controlar todo", () => {
      const valor = "hola mundo";
      const input = wrapper.find("input");

      input.simulate("change", {
         target: { value: valor },
      });

      wrapper
         .find("form")
         .simulate("submit", { preventDefault() {} });

      expect(setCategories).toHaveBeenCalled();
      expect(setCategories).toHaveBeenCalledTimes(1);
      expect(setCategories).toHaveBeenCalledWith(
         expect.any(Function)
      );
      expect(wrapper.find("input").prop("value")).toBe("");
   });

   // -----------------------------------------------------------
});
