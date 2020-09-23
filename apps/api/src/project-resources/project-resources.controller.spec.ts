import { Test, TestingModule } from '@nestjs/testing';
import { ProjectResourcesController } from './project-resources.controller';

describe('ProjectResourcesController', () => {
  let controller: ProjectResourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectResourcesController],
    }).compile();

    controller = module.get<ProjectResourcesController>(
      ProjectResourcesController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
