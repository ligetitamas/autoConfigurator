import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module
export default class TeslaModule extends VuexModule {
  // State (classic fields)
  private _cars: any = [];
  private _model: any = [];
  private _carId: any = "";

  private config: AxiosRequestConfig = {
    withCredentials: false,
    // Az ip számot írd át a backend Network címére és portjára, pl.:
    // baseURL: "http://192.168.1.68:3000",
    // baseURL: "http://localhost:3000", // ha egy gépen fut minden (tesztelő böngésző, frontend, backend)
    baseURL: "http://localhost:3000",
    timeout: 9000
  };

  // Getters
  get cars(): any[] {
    return this._cars;
  }

  get model(): any[] {
    return this._model;
  }
  get carId(): any {
    return this._carId;
  }

  @Action
  public async getID(carURL: string): Promise<any> {
    axios
      .get(`/cars/${carURL}/convert`, this.config)
      .then((res: AxiosResponse) => {
        const data: any = res.data;
        if (data) {
          this.context.commit("mutateId", data);
        }
      })
      .catch((ex: AxiosError) => alert(ex.message));
  }

  @Action
  public async getCars(): Promise<any> {
    axios
      .get("/cars", this.config)
      .then((res: AxiosResponse) => {
        const data: any = res.data;
        if (data) {
          this.context.commit("mutateCars", data);
        }
      })
      .catch((ex: AxiosError) => alert(ex.message));
  }
  @Action
  public async getModel(carName: string): Promise<any> {
    axios
      .get(`/forms/${carName}`, this.config)
      .then((res: AxiosResponse) => {
        const data: any = res.data;
        if (data) {
          this.context.commit("mutateModel", data);
        }
      })
      .catch((ex: AxiosError) => alert(ex.message));
  }
  @Action
  public async saveConfig(config: any): Promise<any> {
    axios.post("/teslas", config, this.config).then((res: AxiosResponse) => {
      const id: any = res.data._id;
      console.log(id);
      alert("A konfigurációja elérhető a következő id-val: " + id);
    });
  }

  @Mutation
  private mutateModel(data: any): void {
    this._model = data;
  }
  @Mutation
  private mutateId(data: any): void {
    this._carId = data;
  }

  @Mutation
  private mutateCars(data: any): void {
    this._cars = data;
  }
}
