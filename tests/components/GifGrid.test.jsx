import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch'

    test('should show the loading', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={ category } />)
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

     })

     test('should show items when loaded the images from useFetchGifs', () => { 

        const gifs = [{
            id: 'Abc',
            title: 'Saitama',
            url: 'https://example.com'
        },
        {
            id: 'Abc2',
            title: 'Saitama2',
            url: 'https://example.com'
        }
    ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={ category } />)
        expect( screen.getAllByRole('img').length ).toBe(2)


      })

 })