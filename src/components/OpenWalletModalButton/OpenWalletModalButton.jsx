import { useConnectModal } from '@rainbow-me/rainbowkit';

export const OpenWalletModalButton = () => {
  const { openConnectModal } = useConnectModal();
  return (
    <div className="connect-wallet-button">
      {openConnectModal && (
        <button onClick={openConnectModal} type="button">
          Open Connect Modal
        </button>
      )}
    </div>
  );
};
