import { computed, inject, Injectable } from '@angular/core';
import { signalState, patchState, PartialStateUpdater } from '@ngrx/signals';
import { ResourceService } from 'src/app/resourceService/resource.service';

interface State {
  data: any[],
  activeTab: number,
  loading: boolean,
}

const defaultState: State = {
  data: [],
  activeTab: 0,
  loading: false,
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public resourceState = signalState<State>(defaultState);

  private readonly users = this.resourceState.data;
  public resources = this.resourceState.data;

  public readonly activeTab = this.resourceState.activeTab;
  public readonly loading = this.resourceState.loading;

  public readonly userList = computed(() => {
    return this.users().filter((user) => user.status === "active");
  });
  
  public readonly resourceList = computed(() => {
    return this.resources();
  });

  public readonly numbersOfUsers = computed(() => {
    return this.users().length;
  });
  private resourceService = inject(ResourceService);

  public loadAllResource() {
    this.setLoadingState(true);
    this.resourceService.getAllResouces().subscribe((res: any) => {
      patchState(this.resourceState, { data: res.results });
      this.setLoadingState(false);
    });
  }

  private setActiveTab(activeTab: number) {
    patchState(this.resourceState, this.activeTabSetter(activeTab));
  }

  private activeTabSetter(tab: number): PartialStateUpdater<{ activeTab: number }> {
    return () => ({ activeTab: tab });
  }

  private setLoadingState(isLoading: boolean) {
    patchState(this.resourceState, this.loadingSetter(isLoading));
  }

  private loadingSetter(loading: boolean): PartialStateUpdater<{ loading: boolean }> {
    return () => ({ loading });
  }
}
