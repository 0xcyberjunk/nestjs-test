import { Module } from '@nestjs/common';
import { ConfigProvider } from 'src/config/config.provider';
import { VectorStoreProvider } from '../vector-store/vector-store.provider';

@Module({
  providers: [ConfigProvider, VectorStoreProvider],
  exports: [VectorStoreProvider],
})
export class VectorStoreModule {}
