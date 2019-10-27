import React from "react";
import { mount } from "enzyme";
import withListLoading, { DefaultLoading, DefaultError } from "./index";
import EmptyList from '../Empty';

// variable options
// data: null, [], [1,2,3]
// error: null, Error
// LoadingFallback: given, not given
// EmptyFallback: given, not given
// ErrorFallback: given, not given

describe("with list loading tests", () => {
  const Item = ({ value }) => <div>{value}</div>;
  const Base = ({ data }) => (
    <>
      {data.map(value => (
        <Item key={value} value={value} />
      ))}
    </>
  );
  const BaseWithListLoading = withListLoading(Base);

  it("should be loading", () => {
    const wrapper = mount(<BaseWithListLoading data={null} />);
    expect(wrapper.find(DefaultLoading).length).toEqual(1);
  });

  it("should be loading with custom loader", () => {
    const wrapper = mount(
      <BaseWithListLoading data={null} LoadingFallback={CustomLoading} />
    );
    expect(wrapper.find(CustomLoading).length).toEqual(1);
  });

  it('should show default error', ()=>{
    const error = new Error('Test Error.');
    const wrapper = mount(
      <BaseWithListLoading 
        data={null}
        error={error} />
    );
    expect(wrapper.find(DefaultError).length).toEqual(1);
  });

  it('should show custom error', ()=>{
    const error = new Error('Test Error.');
    const wrapper = mount(
      <BaseWithListLoading 
        data={null}
        error={error}
        ErrorFallback={CustomError} />
    );
    expect(wrapper.find(CustomError).length).toEqual(1);
  });

  it('should show default not data fallback', ()=>{
    const data = [];
    const wrapper = mount(
      <BaseWithListLoading 
        data={data} />
    );
    expect(wrapper.find(EmptyList).length).toEqual(1);
  });

  it('should show custom not data fallback', ()=>{
    const data = [];
    const wrapper = mount(
      <BaseWithListLoading 
        data={data}
        EmptyFallback={CustomNoData} />
    );
    expect(wrapper.find(CustomNoData).length).toEqual(1);
  });

  it('should show list', ()=>{
    const data = [1, 2, 3];
    const wrapper = mount(
      <BaseWithListLoading 
        data={data} />
    );
    expect(wrapper.find(Base).length).toEqual(1);
  });

  it('should show list items', ()=>{
    const data = [1, 2, 3];
    const wrapper = mount(
      <BaseWithListLoading 
        data={data} />
    );
    const base = wrapper.find(Base);
    expect(base.find(Item).length).toEqual(3);
  });
});

const CustomLoading = () => <>I am loading.</>;
const CustomError = () => <>Custom something broke</>;
const CustomNoData = () => <>ha u hav no dat</>;
