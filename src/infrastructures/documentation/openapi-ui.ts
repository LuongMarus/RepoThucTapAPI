import { SWAGGER_UI_CONSTANTS } from '@/common/constants';
import { SwaggerCustomOptions } from '@nestjs/swagger';
import { SwaggerUiOptions } from '@nestjs/swagger/dist/interfaces/swagger-ui-options.interface';

export class SwaggerUI {
  constructor(private readonly applicationUrl: string) {}

  private customSiteTitle = 'Custom Swagger UI';
  private faviconFilename = 'nestjs-logo.png';
  private topbarIconFilename = 'app-logo.png';

  private get customfavIcon(): string {
    return `${this.applicationUrl}/wwwroot/swagger/assets/${this.faviconFilename}`;
  }

  private get customCss(): string {
    return `
    .topbar-wrapper { content:url('${this.applicationUrl}/wwwroot/swagger/assets/${this.topbarIconFilename}'); width:242px; height:auto; }
    .topbar-wrapper svg { visibility: hidden; }
    .swagger-ui .topbar { background-color: ${SWAGGER_UI_CONSTANTS.TOPBAR.BACKGROUND_COLOR}; }
    .swagger-ui .opblock.opblock-get { background-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.GET.BACKGROUND_COLOR}; border-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.GET.BORDER_COLOR}; }
    .swagger-ui .opblock.opblock-get .opblock-summary-method { background: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.GET.SUMMARY_COLOR}; }
    .swagger-ui .opblock.opblock-post { background-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.POST.BACKGROUND_COLOR}; border-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.POST.BORDER_COLOR}; }
    .swagger-ui .opblock.opblock-post .opblock-summary-method { background: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.POST.SUMMARY_COLOR}; }
    .swagger-ui .opblock.opblock-delete { background-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.DELETE.BACKGROUND_COLOR}; border-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.DELETE.BORDER_COLOR}; }
    .swagger-ui .opblock.opblock-delete .opblock-summary-method { background: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.DELETE.SUMMARY_COLOR}; }
    .swagger-ui .opblock.opblock-patch { background-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PATCH.BACKGROUND_COLOR}; border-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PATCH.BORDER_COLOR}; }
    .swagger-ui .opblock.opblock-patch .opblock-summary-method { background: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PATCH.SUMMARY_COLOR}; }
    .swagger-ui .opblock.opblock-put { background-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PUT.BACKGROUND_COLOR}; border-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PUT.BORDER_COLOR}; }
    .swagger-ui .opblock.opblock-put .opblock-summary-method { background: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PUT.SUMMARY_COLOR}; }
    .swagger-ui .btn.authorize { border-color: ${SWAGGER_UI_CONSTANTS.AUTHORIZE.BACKGROUND_COLOR}; color: ${SWAGGER_UI_CONSTANTS.AUTHORIZE.BACKGROUND_COLOR}; }
    .swagger-ui .btn.authorize svg { fill: ${SWAGGER_UI_CONSTANTS.AUTHORIZE.BACKGROUND_COLOR}; } 
    `;
  }

  private swaggerOptions: SwaggerUiOptions = {
    persistAuthorization: true,
    displayRequestDuration: true,
    filter: true,
    showExtensions: true,
    showCommonExtensions: true,
  };

  public get customOptions(): SwaggerCustomOptions {
    return {
      customfavIcon: this.customfavIcon,
      customSiteTitle: this.customSiteTitle,
      customCss: this.customCss,
      swaggerOptions: this.swaggerOptions,
    };
  }
}
