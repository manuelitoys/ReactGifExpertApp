import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en useFetchGifs', () => { 

    test('should return a initial state', () => { 

        const { result } = renderHook( () => useFetchGifs('One Punch'))
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

     })
    
     test('should return an array of images and isLoading is false', async () => { 

        const { result } = renderHook( () => useFetchGifs('One Punch'))

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

     })

 })