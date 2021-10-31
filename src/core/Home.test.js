import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryList from "./country/CountryList";
import Home from './Home';
import Search from './Search';

describe('Home', () => {
    test("test label in home page", () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        const text = screen.getByText(/List of Countries/i);
        expect(text).toBeInTheDocument();
    });   
    test("find sort button", ()=>{
        const {getByTestId} = render(<BrowserRouter><Home/></BrowserRouter>);
        const elem = getByTestId('sortbtn');
        expect(elem.innerHTML).toBe('Sort By');
    })
    
})
describe('search', () => {
    it('updates on change', () => {
      const setSearchText = jest.fn((value) => {})
      const onSearch = jest.fn();
      const { getByTestId } = render(<Search search={setSearchText}/>)
      const elem = getByTestId('search');
      fireEvent.change(elem, { target: { value: 'test' } })
      expect(elem.value).toBe('test')
    })
})
describe("display country in order", ()=>{
    const CountryList = ({ names }) => (
        <div>
          {names.map((name, index) => (
            <p key={index}>{name}</p>
          ))}
        </div>
      );
      
      it('<Country /> displays names in order', () => {
        const { queryAllByText } = render(
          <CountryList names={['United States of America', 'India']} />,
        );
        const names = queryAllByText(/[United States of America]/);
        expect(names).toHaveLength(2);
        expect(names[0]).toHaveTextContent('United States of America');
        expect(names[1]).toHaveTextContent('India');
      });
})
