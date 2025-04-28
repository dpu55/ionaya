import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
    const { t } = useTranslation("common");

    return (
        <>
            <Head>
                <title>{t("contact.title", "Contact Us")}</title>
                <meta
                    name="description"
                    content={t(
                        "contact.description",
                        "Get in touch with us for inquiries or support."
                    )}
                />
            </Head>

            <Navbar />

            <main className="min-h-screen bg-ion-gray py-16 px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden"
                >
                    {/* Top: Office Info */}
                    <div className="md:flex">
                        {/* Office Image */}
                        <div className="md:w-1/2 h-64 md:h-auto relative">
                            <Image
                                src="/images/office1.png"
                                alt="Our Office"
                                layout="fill" // ✅ Ensures the image fills the parent container
                                objectFit="cover" // ✅ Ensures the image is cropped properly
                                className="rounded-t-lg md:rounded-l-lg"
                            />
                        </div>

                        {/* Contact Details */}
                        <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-4">
                            <h2 className="text-2xl font-bold text-ion-navy">
                                {t("contact.ouroffice", "Our Office")}
                            </h2>
                            <div className="flex items-start space-x-3">
                                <FiMapPin className="text-ion-green mt-1" size={32} />
                                <p className="text-gray-700">
                                    {t("contact.officeaddress")}
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FiPhone className="text-ion-green" size={20} />
                                <a
                                    href="tel:+622123599357"
                                    className="text-gray-700 hover:text-ion-green transition"
                                >
                                    {t("contact.officephone", "+62 21 2359 9357")}
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FiMail className="text-ion-green" size={20} />
                                <a
                                    href="mailto:info@ionaya.com"
                                    className="text-gray-700 hover:text-ion-green transition"
                                >
                                    {t("contact.officemail", "ionfo@ionaya.com")}
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr className="border-ion-gray my-6" />

                    {/* Contact Form */}
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-ion-navy mb-4 text-center">
                            {t("contact.title", "Contact Us")}
                        </h1>
                        <p className="text-gray-600 mb-8 text-center">
                            {t(
                                "contact.description",
                                "Get in touch with us for inquiries or support."
                            )}
                        </p>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {t("contact.form.name", "Your Name")}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-ion-green focus:border-ion-green"
                                    placeholder={t(
                                        "contact.form.namePlaceholder",
                                        "Enter your name"
                                    )}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {t("contact.form.email", "Your Email")}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-ion-green focus:border-ion-green"
                                    placeholder={t(
                                        "contact.form.emailPlaceholder",
                                        "Enter your email"
                                    )}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {t("contact.form.message", "Your Message")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-ion-green focus:border-ion-green"
                                    placeholder={t(
                                        "contact.form.messagePlaceholder",
                                        "Enter your message"
                                    )}
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-1/4 justify-center bg-ion-green text-white font-bold py-3 rounded-md hover:bg-ion-green-dark transition"
                                >
                                    {t("contact.form.submit", "Send Message")}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </>
    );
};

export async function getStaticProps({ locale }: { locale: string }) {
    const translations = await serverSideTranslations(locale, ["common"]);

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

export default Contact;
