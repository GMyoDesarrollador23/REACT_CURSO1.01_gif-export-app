import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";

import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Pruebas en el hooks useFetchGifs", () => {
   //--------------------------------------------------------
   test("debe de retonar el estado inicial", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
         useFetchGifs("one punch")
      );
      const { data, loading } = result.current;
      await waitForNextUpdate();

      expect(data).toEqual([]);
      expect(loading).toBe(true);
   });

   //--------------------------------------------------------
   test("debe deretorna run arreglode imges y el loading en false", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
         useFetchGifs("one punch")
      );
      await waitForNextUpdate();

      const { data, loading } = result.current;

      expect(data.length).toEqual(10);
      expect(loading).toBe(false);
   });
});
