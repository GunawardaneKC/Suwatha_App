import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-center text-neutral-50 dark:text-neutral-200 lg:text-left ">
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 bg-opacity-40">
        <p className="text-sm">© 2024 Suwatha System. All Rights Reserved.</p>
        <p className="text-sm">
          Website Designed & Developed by{' '}
          <a href="" className="text-green-500">
            SLT Digital Projects
          </a>
        </p>
      </div>
    </footer>
  );
}