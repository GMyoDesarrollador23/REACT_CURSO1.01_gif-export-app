import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("preubas sobre el <GifGrid/>", () => {
   const category = "";

   // -----------------------------------------------------
   test("debe de mostrarso correctamente", () => {
      useFetchGifs.mockReturnValue({
         data: [],
         loading: true,
      });

      const wrapper = shallow(
         <GifGrid category={category} />
      );
      expect(wrapper).toMatchSnapshot();
   });

   // -----------------------------------------------------
   test("debe de mostrar items cuando se cargan las imajenes useFetchGifs", () => {
      const gits = [
         {
            id: "ABC",
            url: "https://cualquiercasa.jpg",
            title: "algun titulo",
         },
         {
            id: "123",
            url: "https://cualquiercasa.jpg",
            title: "algun titulo",
         },
      ];

      useFetchGifs.mockReturnValue({
         data: gits,
         loading: false,
      });

      const wrapper = shallow(
         <GifGrid category={category} />
      );

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find("p").exists()).toBe(false);
      expect(wrapper.find("GifGridItem").length).toBe(
         gits.length
      );
   });
});
