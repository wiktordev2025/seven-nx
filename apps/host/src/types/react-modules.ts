import React from 'react';

export type ReactProps = Record<string, any>;

export type ReactComponentModule<T extends ReactProps> = {
  default: React.ComponentType<T>;
};
