import { TestBed } from '@angular/core/testing';

import { from } from 'rxjs';
import { UserData } from '../userData';

describe('FormService', () => {
  let service = {
    getData: jest.fn().mockReturnValue(from([1,2,3,4,5,6,7,8,9,0])),
    setData: jest.fn((user : UserData) => user ? true : false)

  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data', () => {

      let dados = service.getData();

      expect(dados).toBeDefined();


      expect(service.getData.mock.calls.length).toBe(1);
  })

  it("should add new user and return status if success", () => {

    let user : UserData ={
      user: "José",
      email: 'jose@gmail.com',
    }

    let addUserStatusSuccess = service.setData(user);

    expect(addUserStatusSuccess).toBeTruthy();
    expect(service.setData.mock.calls.length).toBe(1);
  })

  it("should try add new user and return error if data invalid", () => {

    let user : any;

    let addUserStatusSuccess = service.setData(user);

    expect(addUserStatusSuccess).toBeFalsy();
    expect(service.setData.mock.calls.length).toBe(2);
  })

});
