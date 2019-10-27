import React from "react";
import { mount } from "enzyme";
import withAuthorizationHOC, { NotAuthorized } from "./index";
import { ACCESS } from "../../Constants";

describe("Testing Edit on Parent Card Authorization", () => {
  const Base = () => <div>Base</div>;
  const BaseWithAuthorization = withAuthorizationHOC(Base);

  it("should return null", () => {
    const wrapper = mount(
      <BaseWithAuthorization
        authUser={null}
        accessLevels={[]}
        Fallback={null}
      />
    );
    expect(wrapper.html()).toBe(null);
  });

  it("should return the default not authorized component", () => {
    const wrapper = mount(
      <BaseWithAuthorization authUser={null} accessLevels={[]} />
    );
    expect(wrapper.find(NotAuthorized).length).toEqual(1);
  });

  it("should have access and show component", () => {
    const authUser = {
      user: {
        _id: "47",
        username: "groot",
        email: "name@email.com",
        access: ACCESS.ADMIN,
        __v: 0
      }
    };
    const accessLevels = [ACCESS.ADMIN];
    const wrapper = mount(
      <BaseWithAuthorization authUser={authUser} accessLevels={accessLevels} />
    );
    expect(wrapper.find(Base).length).toEqual(1);
  });

  it("should have not have access and show fallback", () => {
    const authUser = {
      user: {
        _id: "47",
        username: "groot",
        email: "name@email.com",
        access: ACCESS.ADMIN,
        __v: 0
      }
    };
    const accessLevels = [ACCESS.MINDFLAYER];
    const wrapper = mount(
      <BaseWithAuthorization 
        authUser={authUser} 
        accessLevels={accessLevels} />
    );
    expect(wrapper.find(NotAuthorized).length).toEqual(1);
  });

  it("should have not have access and show nothing", () => {
    const authUser = {
      user: {
        _id: "47",
        username: "groot",
        email: "name@email.com",
        access: ACCESS.ADMIN,
        __v: 0
      }
    };
    const accessLevels = [ACCESS.MINDFLAYER];
    const wrapper = mount(
      <BaseWithAuthorization 
        authUser={authUser} 
        accessLevels={accessLevels}
        Fallback={null} />
    );
    expect(wrapper.html()).toBe(null);
  });
});
