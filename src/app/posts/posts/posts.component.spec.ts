import { of } from 'rxjs';
import { PostsService } from '../posts.service';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let service: PostsService;

  beforeEach(() => {
    service = new PostsService(null);
    component = new PostsComponent(service);
  });

  it('should call fetch when OnInit', () => {
    const spyFetchMethod = spyOn(service, 'fetch').and.callFake(() => {
      return of([1, 2, 3]);
    });

    component.ngOnInit();
    expect(spyFetchMethod).toHaveBeenCalled();
  });

  it('should assign responce to posts property', () => {
    const mockResponse: number[] = [1, 2, 3];
    // подмена колбэком
    // spyOn(service, 'fetch').and.callFake(() => {
    //   return of(mockResponse);
    // });

    // подмена значения
    spyOn(service, 'fetch').and.returnValue(of([1, 2, 3]));

    component.ngOnInit();
    expect(component.posts.length).toBe(mockResponse.length);
  });
});
