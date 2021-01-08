import { createBuilder, BuilderContext, BuilderOutput } from '@angular-devkit/architect';
import { JsonObject } from "@angular-devkit/core";


interface Options extends JsonObject {
  command: string;
  args: string[];
}

export default createBuilder(
  async (options: Options, context: BuilderContext): Promise<BuilderOutput> => {
    console.log('Vin builder start...');
    // console.log({ options, context });
    console.log('Vin builder done...');
    return new Promise((resolve, reject) => {
      resolve({ success: true });
    })
  }
);