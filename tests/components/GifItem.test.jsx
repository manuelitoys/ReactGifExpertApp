import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => { 
    
    const title = 'Saitama';
    const url = 'https://saitama.com/'

    test('should make match with Snapshot', () => { 


        const { container } = render( <GifItem title={ title } url={ url } /> )
        expect( container ).toMatchSnapshot()

     });

     test('should show the image with url right', () => { 

        render( <GifItem title={ title } url={ url } /> )

        // expect( screen.getByRole('img').src ).toBe( url )
        // expect( screen.getByRole('img').alt ).toBe( title )

        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )

      })

      test('should show title of component', () => { 

        render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title ) ).toBeTruthy()

       })

 })