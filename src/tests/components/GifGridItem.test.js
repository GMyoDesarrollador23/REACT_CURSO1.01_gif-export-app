import React from "react";
import { shallow } from "enzyme";

import { GifGridItem } from "../../components/GifGridItem";

describe("testeo de GifGridItem ", () => {
   const title = "titulo de prueba";
   const url = "https://algo.jpg";

   const wrapper = shallow(
      <GifGridItem title={title} url={url} />
   );

   // ---------------------------------------------------------
   test("debe de mostrar el componente correctamente", () => {
      expect(wrapper).toMatchSnapshot();
   });

   // ---------------------------------------------------------
   test("debe de tener un parrafo con el titulo", () => {
      const p = wrapper.find("p");
      expect(p.text().trim()).toBe(title);
   });

   // ---------------------------------------------------------
   test("debe de tener una imagen y url agul al pros", () => {
      const img = wrapper.find("img");
      // console.log(img.prop().src);
      expect(img.prop("src")).toBe(url);
      expect(img.prop("alt")).toBe(title);
   });

   // ---------------------------------------------------------
   test("debe tener la clase animate__fadeIn ", () => {
      const div = wrapper.find("div");
      const className = div.prop("className");

      expect(className.includes("animate__fadeIn")).toBe(
         true
      );
   });
   // ---------------------------------------------------------
});
