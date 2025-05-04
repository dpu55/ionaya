import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Terms: React.FC = () => {
  const { t } = useTranslation(['common', 'terms']);
  const [isOpenKodeEtik, setIsOpenKodeEtik] = useState(false); // State for "Kode Etik Member ION"
  const [isOpenKebijakan, setIsOpenKebijakan] = useState(false); // State for "Kebijakan Kerahasiaan Data"

  const toggleKodeEtik = () => {
    setIsOpenKodeEtik(!isOpenKodeEtik);
  };

  const toggleKebijakan = () => {
    setIsOpenKebijakan(!isOpenKebijakan);
  };

  return (
    <>
      <Head>
        <title>{t("terms:termcondition", "Syarat & Ketentuan")}</title>
        <meta
          name="description"
          content={t(
            "terms:termsDescription",
            "Syarat dan ketentuan ini mengatur penggunaan layanan dan produk yang disediakan oleh PT Ionaya Optima Natura. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini."
          )}
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-ion-gray py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
          <h1 className="text-3xl font-bold text-center text-ion-navy mb-6">
            {t("terms:termcondition", "Syarat & Ketentuan")}
          </h1>

          {/* Drop-down Button for "Kode Etik Member ION" */}
          <div className="mb-6">
            <button
              onClick={toggleKodeEtik}
              className="w-full bg-ion-navy-dark text-gray-200 px-6 py-2 rounded-lg shadow-md hover:bg-ion-navy-light hover:text-white transition flex justify-between items-center"
              style={{ textAlign: "left" }}
            >
              <span>{t("terms:kodeEtikTitle", "Kode Etik Member ION")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* PDF Viewer for "Kode Etik Member ION" */}
          {isOpenKodeEtik && (
            <div className="relative w-full h-[80vh] border border-ion-gray rounded-lg overflow-hidden mt-4">
              <iframe
                src="/kodeetikcontent.html"
                className="absolute inset-0 w-full h-full border-none"
                title="Kode Etik Member ION"
                onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
              />
            </div>
          )}

          {/* Drop-down Button for "Kebijakan Kerahasiaan Data" */}
          <div className="mb-6 mt-8">
            <button
              onClick={toggleKebijakan}
              className="w-full bg-ion-navy-dark text-gray-200 px-6 py-2 rounded-lg shadow-md hover:bg-ion-navy-light hover:text-white transition flex justify-between items-center"
              style={{ textAlign: "left" }}
            >
              <span>{t("terms:kebijakanTitle", "Kebijakan Kerahasiaan Data")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Content for "Kebijakan Kerahasiaan Data" */}
          {isOpenKebijakan && (
            <div className="mt-4 px-2 text-justify text-gray-800 leading-relaxed space-y-4">
              <div>
                <h2 className="-indent-6 ml-6 text-l font-semibold mb-2">{t("terms:kebijakanContent.1.title", "Harga Produk")}</h2>
                <p className="ml-6">
                  {t(
                    "terms:kebijakanContent.1.content",
                    "Harga akhir yang berlaku adalah jumlah yang tercantum pada keranjang belanja, invoice, atau halaman pembayaran (payment page). Jika terjadi perubahan harga sebelum transaksi selesai, total belanja di halaman pembayaran menjadi acuan sah. Biaya tambahan (jika ada) seperti pajak atau biaya layanan akan diinformasikan secara transparan."
                  )}
                </p>
              </div>

              <div>
                <h2 className="-indent-6 ml-6 text-l font-semibold mb-2">{t("terms:kebijakanContent.2.title", "Metode Pembayaran")}</h2>
                <p className="ml-6">{t("terms:kebijakanContent.2.content", "Pembayaran dapat dilakukan melalui metode yang tersedia di platform, termasuk tetapi tidak terbatas pada:")}</p>
                <ul className="list-decimal ml-12 space-y-1">
                  {["ION Cash Wallet", "Transfer bank (virtual account/kliring)", "Kartu kredit/debit", "QRIS atau sistem pembayaran instan lainnya"].map((item, index) => (
                    <li key={index}>{t(`terms:kebijakanContent.2.list.${index}`, item)}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="-indent-6 ml-6 text-l font-semibold mb-2">{t("terms:kebijakanContent.3.title", "Kewajiban Pelanggan")}</h2>
                <ul className="list-decimal ml-8 space-y-2">
                  {["Memastikan informasi pembayaran (nomor rekening, kartu) valid dan dimiliki secara sah.", "Mengisi data diri (nama, alamat, kontak) secara lengkap dan akurat.", "Melakukan konfirmasi pembayaran sesuai batas waktu yang ditentukan (misal: upload bukti transfer maksimal 24 jam setelah pemesanan)."].map((item, index) => (
                    <li key={index}>{t(`terms:kebijakanContent.3.list.${index}`, item)}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="-indent-6 ml-6 text-l font-semibold mb-2">{t("terms:kebijakanContent.4.title", "Pengelolaan Data")}</h2>
                <p className="ml-6">
                  {t(
                    "terms:kebijakanContent.4.content",
                    "PT Ionaya Optima Natura mengumpulkan dan menyimpan data transaksi (riwayat belanja, metode pembayaran, bukti transfer) untuk keperluan verifikasi, penyelesaian masalah transaksi, dan peningkatan layanan. Data tidak akan dibagikan ke pihak ketiga kecuali untuk proses penyelesaian transaksi atau kewajiban hukum."
                  )}
                </p>
              </div>

              <div>
                <h2 className="-indent-6 ml-6 text-l font-semibold mb-2">{t("terms:kebijakanContent.5.title", "Verifikasi & Konfirmasi Transaksi")}</h2>
                <ul className="list-disc ml-8 space-y-1">
                  {["Untuk transaksi non-tunai, PT Ionaya Optima Natura berhak melakukan verifikasi via SMS/email/telepon guna memastikan keabsahan pembayaran.", "Transaksi dianggap sah setelah pembayaran diterima dan dikonfirmasi oleh sistem atau tim verifikasi kami.", "Untuk pembayaran via transfer bank, pastikan Anda mengirimkan bukti transfer yang jelas dan sesuai nominal."].map((item, index) => (
                    <li key={index}>{t(`terms:kebijakanContent.5.list.${index}`, item)}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="-indent-6 ml-6 text-l font-semibold mb-2">{t("terms:kebijakanContent.6.title", "Batas Waktu Pembayaran")}</h2>
                <ul className="list-disc ml-8 space-y-1">
                  {["Pembayaran tidak diterima dalam 24 jam (untuk transfer bank/e-wallet).", "Verifikasi gagal setelah 2x percobaan.", "Terdeteksi kecurangan atau ketidaksesuaian data."].map((item, index) => (
                    <li key={index}>{t(`terms:kebijakanContent.6.list.${index}`, item)}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="-indent-6 ml-6 text-l font-semibold mb-2">{t("terms:kebijakanContent.7.title", "Perubahan Ketentuan")}</h2>
                <p className="ml-6">
                  {t(
                    "terms:kebijakanContent.7.content",
                    "Syarat dan ketentuan ini dapat diperbarui sesuai kebutuhan bisnis atau regulasi. Perubahan akan diumumkan melalui platform resmi PT Ionaya Optima Natura."
                  )}
                </p>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, ["common", "terms"]);

  // Safely delete the `default` property if it exists
  if (translations._nextI18Next?.userConfig && "default" in translations._nextI18Next.userConfig) {
    delete (translations._nextI18Next.userConfig as Record<string, unknown>).default;
  }

  return {
    props: {
      ...translations,
    },
  };
}

export default Terms;