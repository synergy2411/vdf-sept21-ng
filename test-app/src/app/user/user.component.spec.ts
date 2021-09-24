import { ComponentFixture, TestBed } from "@angular/core/testing"
import { UserComponent } from "./user.component"

describe("User Component", () => {

  let  fixture : ComponentFixture<UserComponent>;
  let comp : UserComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:   [UserComponent]
    })
     fixture = TestBed.createComponent(UserComponent)
     comp = fixture.componentInstance;
  })

  it("Should create the user component", () => {
    expect(comp).toBeTruthy();
  })

  it("Should have username as 'Foo'", () => {
    expect(comp.username).toEqual('Foo');
  })

  it("Should create the template with username", () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain('Foo')
  })
})
