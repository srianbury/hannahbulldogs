import withAuthorization from "./index";
import { ACCESS } from '../../Constants';

describe("With Authorization Tests", () => {
  it("should have null user and return false", () => {
    const authUser = null;
    const accessLevels = [];
    const access = withAuthorization(authUser, accessLevels);

    expect(access).toEqual(false);
  });

  it("should have user without access field and return false", () => {
    const authUser = {
      user: {
        _id: "47",
        username: "groot",
        email: "name@email.com",
        __v: 0
      }
    };
    const accessLevels = [];
    const access = withAuthorization(authUser, accessLevels);
    expect(access).toEqual(false);    
  });

  it('should have user with basic access and not be in accessLevels', ()=>{
    const authUser = {
        user: {
          _id: "47",
          username: "groot",
          email: "name@email.com",
          access: ACCESS.USER,
          __v: 0
        }
    };
    const accessLevels = [ACCESS.ADMIN];
    const access = withAuthorization(authUser, accessLevels);
    expect(access).toEqual(false);
  });

  it('should have user with admin access and have access', ()=>{
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
    const access = withAuthorization(authUser, accessLevels);
    expect(access).toEqual(true);
  });

  it('should have user with admin access and not have access', ()=>{
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
    const access = withAuthorization(authUser, accessLevels);
    expect(access).toEqual(false);
  });

  it('should have user with mindflayer access and have access', ()=>{
    const authUser = {
        user: {
          _id: "47",
          username: "groot",
          email: "name@email.com",
          access: ACCESS.MINDFLAYER,
          __v: 0
        }
    };
    const accessLevels = [ACCESS.MINDFLAYER];
    const access = withAuthorization(authUser, accessLevels);
    expect(access).toEqual(true);
  });

  it('should have user admin access and have access', ()=>{
    const authUser = {
        user: {
          _id: "47",
          username: "groot",
          email: "name@email.com",
          access: ACCESS.ADMIN,
          __v: 0
        }
    };
    const accessLevels = [ACCESS.ADMIN, ACCESS.MINDFLAYER];
    const access = withAuthorization(authUser, accessLevels);
    expect(access).toEqual(true);
  });

  it('should have mindflayer access and have access', ()=>{
    const authUser = {
        user: {
          _id: "47",
          username: "groot",
          email: "name@email.com",
          access: ACCESS.MINDFLAYER,
          __v: 0
        }
    };
    const accessLevels = [ACCESS.ADMIN, ACCESS.MINDFLAYER];
    const access = withAuthorization(authUser, accessLevels);
    expect(access).toEqual(true);
  });
});
