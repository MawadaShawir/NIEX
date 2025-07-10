const Footer = () => {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-lg border-t border-white/20 py-6 mt-16 text-center text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} NIEX. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
