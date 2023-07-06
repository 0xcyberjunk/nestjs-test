import { Module } from '@nestjs/common';
import { LLMProvider } from './llm.provider';
import { ConfigProvider } from '../config/config.provider';

@Module({
  providers: [LLMProvider, ConfigProvider],
})
export class LLMModule {}
