interface IDialogConfig {
  type: 'error' | 'none' | 'info' | 'warning' | 'question';
  title: string;
  message: string;
  buttons?: string[];
  detail?: string;
}

export const messageDialog = (config: IDialogConfig) => {
  (window.api as any).openDialog('showMessageBox', config).then((result) => {
    console.log(result);
  });
};
