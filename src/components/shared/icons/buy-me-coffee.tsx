const BuyMeCoffee = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="24"
      viewBox="0 0 20 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M19.9109 6.41508L19.7517 5.74907C19.6082 5.15106 19.2837 4.58605 18.5442 4.37004C18.3066 4.30104 18.0376 4.27204 17.8566 4.12904C17.6733 3.98604 17.6202 3.76303 17.578 3.55703C17.4996 3.17902 17.4272 2.80101 17.3464 2.42401C17.2776 2.099 17.2233 1.73399 17.0448 1.43699C16.8096 1.03698 16.3247 0.802976 15.8434 0.648973C15.5963 0.572401 15.3442 0.507627 15.0882 0.45497C13.882 0.191965 12.6154 0.0949627 11.3765 0.0389616C9.8889 -0.0288458 8.39733 -0.00812562 6.91329 0.100963C5.80954 0.183964 4.64549 0.284966 3.59602 0.600972C3.21243 0.716974 2.81677 0.856977 2.52485 1.10198C2.16659 1.40399 2.05078 1.872 2.31134 2.248C2.49711 2.51501 2.81194 2.70401 3.14608 2.82801C3.58034 2.99002 4.03511 3.11202 4.50073 3.19402C5.79748 3.43203 7.14127 3.52503 8.46577 3.56403C9.93501 3.61403 11.4055 3.57403 12.8687 3.44603C13.2294 3.41303 13.59 3.37302 13.9495 3.32702C14.3741 3.27302 14.6467 2.81401 14.5213 2.49301C14.3717 2.11 13.97 1.962 13.5152 2.02C12.9531 2.094 12.3572 2.128 11.8482 2.166C10.4284 2.246 9.00377 2.248 7.58277 2.172C7.11651 2.14642 6.65113 2.11074 6.18711 2.065C6.08337 2.055 5.96998 2.04 5.87589 2.029C5.58276 1.993 5.29205 1.949 5.00254 1.899C4.86865 1.872 4.86865 1.71399 5.00254 1.68699H5.00858C5.34271 1.62699 5.68047 1.57899 6.01944 1.53999H6.02185C6.17987 1.53099 6.3391 1.50799 6.49712 1.49199C7.86978 1.37388 9.25057 1.33379 10.6298 1.37199C11.4429 1.39099 12.2547 1.43899 13.0629 1.51599L13.3379 1.54699C13.66 1.58699 13.9809 1.63499 14.3005 1.69199C14.7734 1.77699 15.3802 1.805 15.5913 2.234C15.6576 2.37101 15.6878 2.52201 15.7251 2.66501L16.11 4.14904C16.1181 4.18086 16.1183 4.21373 16.1105 4.24561C16.1026 4.27749 16.087 4.30769 16.0644 4.33433C16.0419 4.36097 16.013 4.38348 15.9796 4.40047C15.9461 4.41745 15.9088 4.42854 15.8699 4.43305H15.8663C15.8217 4.43905 15.7758 4.44305 15.7312 4.44805C13.8337 4.64873 11.9226 4.74728 10.0098 4.74305C8.11451 4.74143 6.22125 4.63989 4.3415 4.43905C4.17263 4.42204 3.98807 4.39704 3.83849 4.37904C3.44524 4.33104 3.05561 4.27104 2.66478 4.21804C2.19071 4.15304 1.73836 4.18604 1.31013 4.37904C0.960308 4.53905 0.674419 4.78305 0.49589 5.08006C0.310124 5.39606 0.255841 5.74007 0.173814 6.08008C0.0905813 6.42008 -0.0384904 6.78709 0.010967 7.1361C0.115913 7.88911 0.750415 8.50112 1.66357 8.63812C6.17923 9.3062 10.7873 9.43283 15.3464 9.01413C15.433 9.00596 15.5207 9.01401 15.6031 9.03768C15.6855 9.06135 15.7604 9.10004 15.8223 9.15091C15.8842 9.20177 15.9316 9.2635 15.9609 9.33156C15.9902 9.39962 16.0008 9.47226 15.9917 9.54414L15.9061 10.2412L14.6781 20.1483C14.6286 20.5584 14.6214 20.9804 14.5273 21.3854C14.3801 22.0224 13.8602 22.4134 13.1015 22.5564C12.4055 22.6874 11.6962 22.7564 10.9833 22.7614C10.192 22.7654 9.40305 22.7364 8.61173 22.7394C7.76854 22.7434 6.73476 22.6794 6.08458 22.1594C5.51159 21.7014 5.43319 20.9854 5.35478 20.3663L4.47299 13.3532L4.08457 10.2592C4.03994 9.90815 3.73957 9.56414 3.26671 9.58114C2.8614 9.59614 2.4006 9.88115 2.44885 10.2602L2.72389 12.4452L3.86864 21.5574C4.04597 22.9014 5.28481 23.6254 6.8192 23.8294C7.71426 23.9494 8.63223 23.9734 9.54177 23.9854C10.707 24.0014 11.8844 24.0384 13.0303 23.8634C14.7288 23.6054 16.0038 22.6654 16.1859 21.2064C16.5961 17.8743 17.0098 14.5432 17.4212 11.2112L17.6805 9.12413C17.6933 9.02064 17.746 8.92331 17.8307 8.84658C17.9154 8.76985 18.0277 8.71779 18.151 8.69813C18.6359 8.62012 19.1003 8.48612 19.4465 8.18012C19.9954 7.69211 20.1051 7.05709 19.9109 6.41508ZM18.1281 7.1871C17.9531 7.3241 17.6902 7.3881 17.4308 7.4201C14.5165 7.77911 11.5611 7.96011 8.61535 7.88011C6.50677 7.82011 4.42112 7.62611 2.33426 7.3821C2.12919 7.3581 1.90844 7.3271 1.76731 7.2021C1.50193 6.96609 1.63341 6.49208 1.70217 6.20708C1.76489 5.94707 1.88552 5.59807 2.26068 5.56107C2.84451 5.50407 3.52244 5.70907 4.10146 5.78107C4.79748 5.86907 5.49591 5.94007 6.19676 5.99307C9.18833 6.21908 12.2306 6.18308 15.2101 5.85307C15.7529 5.79307 16.2945 5.72307 16.8325 5.64307C17.3138 5.57107 17.8458 5.43706 18.1353 5.84907C18.3355 6.13008 18.3621 6.50608 18.3307 6.82309C18.3212 6.96153 18.2483 7.09173 18.1268 7.1871H18.1281ZM10.6986 11.0872C9.65878 11.4572 8.47904 11.8752 6.94827 11.8752C6.30847 11.8739 5.67182 11.8009 5.05562 11.6582L6.11353 20.6624C6.19193 21.4424 6.97843 22.0424 7.92294 22.0424C7.92294 22.0424 9.42235 22.1074 9.92295 22.1074C10.4622 22.1074 12.0774 22.0424 12.0774 22.0424C13.0219 22.0424 13.8072 21.4424 13.8856 20.6624L15.0195 10.7122C14.5079 10.5588 13.9687 10.4783 13.4248 10.4742C12.4284 10.4742 11.6262 10.7582 10.6986 11.0872Z" />
    </svg>
  )
}

export default BuyMeCoffee