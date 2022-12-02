import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFac11JXGJWfFRpR2NbfU5yflRHal9YVAciSV9jS3xSdkdrWX1acHZdQmVbVA==')
platformBrowserDynamic().bootstrapModule(AppModule)
                        .catch(err => console.error(err));
