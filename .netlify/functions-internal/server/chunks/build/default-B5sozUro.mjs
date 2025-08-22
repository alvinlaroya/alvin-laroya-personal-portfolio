import { x as useRoute, y as useRuntimeConfig, k as __nuxt_component_0$1$1, d as __nuxt_component_1$1, j as _sfc_main$b, _ as _export_sfc, a as __nuxt_component_0$2, m as _sfc_main$9, r as useToast, e as _sfc_main$8$1 } from './server.mjs';
import { provide, mergeProps, ref, reactive, unref, withCtx, createTextVNode, defineComponent, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _sfc_main$1$1, a as _sfc_main$a } from './Input-DfKQDC2l.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$8 } from './Tooltip-Br75peob.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$1$2, b as _sfc_main$c } from './Textarea-DHtM5nCC.mjs';
import * as z from 'zod';
import 'pinia';
import 'vue-router';
import '@supabase/ssr';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DownloadCv",
  __ssrInlineRender: true,
  props: {
    color: {
      default: "bg-primary"
    }
  },
  setup(__props) {
    const props = __props;
    useToast();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [[props.color, { "text-white": props.color === "bg-black" }], "group hover:bg-primary-500 text-black px-3 py-2 flex items-center rounded-lg text-sm font-medium hover:cursor-pointer"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:download",
        size: "1rem",
        class: "mr-2 group-hover:scale-110 transition-all"
      }, null, _parent));
      _push(` Download CV </button>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DownloadCv.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$7, { __name: "DownloadCv" });
const _sfc_main$6 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const links = [
      {
        label: "Home",
        link: "/",
        section: "home"
      },
      {
        label: "About",
        link: void 0,
        section: "about"
      },
      {
        label: "Experience",
        link: void 0,
        section: "experience"
      },
      {
        label: "Portfolio",
        link: void 0,
        section: "portfolio"
      }
    ];
    const activeLink = ref("home");
    function scrollToSection(section, offset = 0) {
      activeLink.value = section;
      const element = (void 0).getElementById(section);
      const y = element.getBoundingClientRect().top + (void 0).scrollY + offset;
      (void 0).scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_1$1;
      const _component_DownloadCv = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 bg-[#021526]" }, _attrs))}><div class="max-w-screen-lg mx-auto"><div class="flex lg:justify-between items-center h-16"><div class="hidden md:block"><div class="flex items-center space-x-4"><!--[-->`);
      ssrRenderList(links, (item) => {
        _push(`<div>`);
        if (item?.link) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/",
            class: [{ "text-primary border-b": unref(activeLink) === "home" && unref(route).path === "/" }, "hover:text-primary px-3 py-2 text-sm font-normal tracking-wide"],
            onClick: ($event) => scrollToSection("home", -80)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Home `);
              } else {
                return [
                  createTextVNode("Home ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<a class="${ssrRenderClass([{ "text-primary border-b": unref(activeLink) === item.section && unref(route).path === "/" }, "hover:text-primary px-3 py-2 text-sm font-normal tracking-wide"])}" href="#">${ssrInterpolate(item.label)}</a>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="flex justify-between items-center w-full lg:w-auto pl-2 pr-4"><div class="flex mr-3"><a href="https://github.com/alvinlaroya" target="_blank" class="px-3 py-2 rounded-lg text-sm font-medium hover:cursor-pointer">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:github",
        size: "1.2rem"
      }, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/in/alvin-laroya-bb409a1a0/" target="_blank" class="px-3 py-2 rounded-lg text-sm font-medium hover:cursor-pointer">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:linkedin",
        size: "1.2rem"
      }, null, _parent));
      _push(`</a></div>`);
      _push(ssrRenderComponent(_component_DownloadCv, null, null, _parent));
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$6, { __name: "Header" });
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_UAvatarGroup = _sfc_main$2$1;
  const _component_UTooltip = _sfc_main$8;
  const _component_ULink = _sfc_main$9;
  const _component_UAvatar = _sfc_main$b;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-3" }, _attrs))}><h2 class="text-sm text-gray-200 mb-4">Character Reference:</h2>`);
  _push(ssrRenderComponent(_component_UAvatarGroup, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UTooltip, { text: "Jonjie Viduya" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ULink, {
                to: "https://www.facebook.com/jonjie.viduya",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_UAvatar, {
                      src: "/testimonials/jonjie.webp",
                      alt: "Benjamin Canac"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_UAvatar, {
                        src: "/testimonials/jonjie.webp",
                        alt: "Benjamin Canac"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ULink, {
                  to: "https://www.facebook.com/jonjie.viduya",
                  target: "_blank",
                  class: "hover:ring-primary transition",
                  raw: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UAvatar, {
                      src: "/testimonials/jonjie.webp",
                      alt: "Benjamin Canac"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UTooltip, { text: "Ryan Bel Soriano" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ULink, {
                to: "https://www.facebook.com/rbsenpai",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_UAvatar, {
                      src: "/testimonials/ryan.webp",
                      alt: "Romain Hamel"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_UAvatar, {
                        src: "/testimonials/ryan.webp",
                        alt: "Romain Hamel"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ULink, {
                  to: "https://www.facebook.com/rbsenpai",
                  target: "_blank",
                  class: "hover:ring-primary transition",
                  raw: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UAvatar, {
                      src: "/testimonials/ryan.webp",
                      alt: "Romain Hamel"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UTooltip, { text: "Lawrence Bonilla" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ULink, {
                to: "https://www.instagram.com/lawrerere/",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_UAvatar, {
                      src: "/testimonials/lawrence.webp",
                      alt: "Neil Richter"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_UAvatar, {
                        src: "/testimonials/lawrence.webp",
                        alt: "Neil Richter"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ULink, {
                  to: "https://www.instagram.com/lawrerere/",
                  target: "_blank",
                  class: "hover:ring-primary transition",
                  raw: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UAvatar, {
                      src: "/testimonials/lawrence.webp",
                      alt: "Neil Richter"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UTooltip, { text: "Renz Sobrevilla" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ULink, {
                to: "https://www.facebook.com/justrenzu",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_UAvatar, {
                      src: "/testimonials/renz.webp",
                      alt: "Neil Richter"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_UAvatar, {
                        src: "/testimonials/renz.webp",
                        alt: "Neil Richter"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ULink, {
                  to: "https://www.facebook.com/justrenzu",
                  target: "_blank",
                  class: "hover:ring-primary transition",
                  raw: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UAvatar, {
                      src: "/testimonials/renz.webp",
                      alt: "Neil Richter"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UTooltip, { text: "Joshua Cucueco" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ULink, {
                to: "https://www.facebook.com/JoshuaFruity",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_UAvatar, {
                      src: "/testimonials/joshua.webp",
                      alt: "Neil Richter"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_UAvatar, {
                        src: "/testimonials/joshua.webp",
                        alt: "Neil Richter"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ULink, {
                  to: "https://www.facebook.com/JoshuaFruity",
                  target: "_blank",
                  class: "hover:ring-primary transition",
                  raw: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UAvatar, {
                      src: "/testimonials/joshua.webp",
                      alt: "Neil Richter"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UTooltip, { text: "Allan Rosero" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ULink, {
                to: "https://www.facebook.com/allanpaul.rosero",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_UAvatar, {
                      src: "/testimonials/allan.webp",
                      alt: "Neil Richter"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_UAvatar, {
                        src: "/testimonials/allan.webp",
                        alt: "Neil Richter"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ULink, {
                  to: "https://www.facebook.com/allanpaul.rosero",
                  target: "_blank",
                  class: "hover:ring-primary transition",
                  raw: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UAvatar, {
                      src: "/testimonials/allan.webp",
                      alt: "Neil Richter"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UTooltip, { text: "Jonjie Viduya" }, {
            default: withCtx(() => [
              createVNode(_component_ULink, {
                to: "https://www.facebook.com/jonjie.viduya",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UAvatar, {
                    src: "/testimonials/jonjie.webp",
                    alt: "Benjamin Canac"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_UTooltip, { text: "Ryan Bel Soriano" }, {
            default: withCtx(() => [
              createVNode(_component_ULink, {
                to: "https://www.facebook.com/rbsenpai",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UAvatar, {
                    src: "/testimonials/ryan.webp",
                    alt: "Romain Hamel"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_UTooltip, { text: "Lawrence Bonilla" }, {
            default: withCtx(() => [
              createVNode(_component_ULink, {
                to: "https://www.instagram.com/lawrerere/",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UAvatar, {
                    src: "/testimonials/lawrence.webp",
                    alt: "Neil Richter"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_UTooltip, { text: "Renz Sobrevilla" }, {
            default: withCtx(() => [
              createVNode(_component_ULink, {
                to: "https://www.facebook.com/justrenzu",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UAvatar, {
                    src: "/testimonials/renz.webp",
                    alt: "Neil Richter"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_UTooltip, { text: "Joshua Cucueco" }, {
            default: withCtx(() => [
              createVNode(_component_ULink, {
                to: "https://www.facebook.com/JoshuaFruity",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UAvatar, {
                    src: "/testimonials/joshua.webp",
                    alt: "Neil Richter"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_UTooltip, { text: "Allan Rosero" }, {
            default: withCtx(() => [
              createVNode(_component_ULink, {
                to: "https://www.facebook.com/allanpaul.rosero",
                target: "_blank",
                class: "hover:ring-primary transition",
                raw: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UAvatar, {
                    src: "/testimonials/allan.webp",
                    alt: "Neil Richter"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Connections.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]), { __name: "Connections" });
const _sfc_main$4 = {
  __name: "PersonalInformation",
  __ssrInlineRender: true,
  setup(__props) {
    const informations = [
      {
        icon: "lucide:briefcase-business",
        text: "Software Developer"
      },
      {
        icon: "lucide:phone",
        text: "+639388566223",
        href: "tel:+639388566223"
      },
      {
        icon: "lucide:mail",
        text: "alvinreggaelaroya@gmail.com",
        href: "mailto:alvinreggaelaroya@gmail.com"
      },
      {
        icon: "lucide:graduation-cap",
        text: "Computer Science"
      },
      {
        icon: "lucide:map-pin",
        text: "Agoo, La Union, Philippines"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1$1;
      const _component_Icon = __nuxt_component_1$1;
      const _component_USeparator = _sfc_main$1$1;
      const _component_Connections = __nuxt_component_3$1;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "flex lg:sticky top-16 lg:h-[calc(100vh-4rem)] w-full lg:w-76" }, _attrs))}><div class="flex flex-row lg:flex-col space-x-4 p-4 w-full space-y-4 tracking-wide"><div class="flex justify-center items-center object-bottom">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/profile2.webp",
        placeholder: [200, 200],
        fit: "cover",
        alt: "profile-image",
        width: "300",
        height: "300",
        class: "w-[140px] lg:w-[200px] rounded-full"
      }, null, _parent));
      _push(`</div><div class="flex flex-col justify-center"><h2 class="text-left lg:text-center text-xl lg:text-2xl mb-2 font-semibold">Alvin Laroya</h2><!--[-->`);
      ssrRenderList(informations, (info, i) => {
        _push(`<div class="flex space-x-3 items-center mb-0 lg:mb-1.5 text-gray-300"><div class="flex">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: info.icon,
          size: "1rem"
        }, null, _parent));
        _push(`</div><a${ssrRenderAttr("href", info.href)} class="${ssrRenderClass([{ "text-secondary hover:underline": info?.href }, "text-sm"])}">${ssrInterpolate(info.text)}</a></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_USeparator, { class: "mt-3 hidden lg:block" }, null, _parent));
      _push(`<div class="hidden lg:block"><div class="mt-3"><h2 class="text-sm text-gray-200">Pronounce: <span class="text-gray-400">he/his</span></h2></div><div class="mt-3"><h2 class="text-sm text-gray-200">Hobbies:</h2><span class="text-gray-400 text-xs">Coding • Playing Guitar • Singing • FPS Gaming • Coffee • Nature Travel</span></div></div>`);
      _push(ssrRenderComponent(_component_Connections, { class: "hidden lg:block" }, null, _parent));
      _push(`</div></div></aside>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PersonalInformation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/svg/chatbot.svg");
const _sfc_main$3 = {
  __name: "Chat",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const message = ref("");
    const isSending = ref(false);
    ref(null);
    const messages = reactive([
      {
        me: false,
        message: "Greetings, I am Alvin’s AI Agent. All of the responses I provide are based solely on the details outlined in his resume, ensuring that every answer accurately reflects his professional background, skills, and experiences.",
        timestamp: /* @__PURE__ */ new Date()
      }
    ]);
    const formatTime = (date) => {
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAvatar = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-6 right-6 z-50" }, _attrs))}><button class="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110">`);
      if (!unref(isOpen)) {
        _push(`<img class="w-12"${ssrRenderAttr("src", _imports_0$1)} alt="">`);
      } else {
        _push(`<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`);
      }
      _push(`</button><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="absolute bottom-20 -right-6 lg:right-0 w-screen lg:w-96 h-[30rem] bg-white rounded-lg shadow-2xl transform origin-bottom-right"><div class="bg-blue-600 text-white p-4 flex items-center rounded-t-lg"><div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3"><img${ssrRenderAttr("src", _imports_0$1)} class="w-6" alt=""></div><div class="flex-1"><h1 class="text-lg font-semibold">Alvin CV Agent</h1><p class="text-blue-200 text-xs">${ssrInterpolate(unref(isSending) ? "Typing..." : "Online")}</p></div></div><div class="flex-1 p-3 overflow-y-auto space-y-3 h-88"><!--[-->`);
      ssrRenderList(unref(messages), (msg, index) => {
        _push(`<div class="${ssrRenderClass(msg.me ? "flex items-start space-x-2 justify-end" : "flex items-start space-x-2")}">`);
        if (msg.me) {
          _push(`<!--[--><div class="bg-blue-600 text-white rounded-lg p-2 max-w-xs"><p class="text-sm">${ssrInterpolate(msg.message)}</p><span class="text-xs text-blue-200 mt-1 block">${ssrInterpolate(formatTime(msg.timestamp))}</span></div><div class="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg></div><!--]-->`);
        } else {
          _push(`<!--[--><div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">`);
          _push(ssrRenderComponent(_component_UAvatar, { src: "/profile.webp" }, null, _parent));
          _push(`</div><div class="bg-gray-100 rounded-lg p-2 max-w-xs"><p class="text-gray-800 text-sm">${ssrInterpolate(msg.message)}</p><span class="text-xs text-gray-500 mt-1 block">${ssrInterpolate(formatTime(msg.timestamp))}</span></div><!--]-->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (unref(isSending)) {
        _push(`<div class="flex items-start space-x-2"><div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-white animate-spin" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm1 14V5h10v11H5z" clip-rule="evenodd"></path></svg></div><div class="bg-gray-100 rounded-lg p-2"><div class="flex space-x-1"><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}"></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="border-t bg-gray-50 p-3 rounded-b-lg"><div class="flex space-x-2"><input${ssrRenderAttr("value", unref(message))}${ssrIncludeBooleanAttr(unref(isSending)) ? " disabled" : ""} type="text" placeholder="Type your message..." class="flex-1 border border-gray-300 text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"><button${ssrIncludeBooleanAttr(unref(isSending) || !unref(message).trim()) ? " disabled" : ""} class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors duration-200 flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed">`);
      if (!unref(isSending)) {
        _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>`);
      } else {
        _push(`<svg class="w-4 h-4 animate-spin" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm1 14V5h10v11H5z" clip-rule="evenodd"></path></svg>`);
      }
      _push(`</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactMe",
  __ssrInlineRender: true,
  setup(__props) {
    const schema = z.object({
      name: z.string("Name is required!"),
      email: z.string("Email is required!").email("Invalid email"),
      subject: z.string("Subject is required!"),
      message: z.string("Message is required!")
    });
    const state = reactive({
      name: void 0,
      email: void 0,
      subject: void 0,
      message: void 0
    });
    const toast = useToast();
    const isSubmitting = ref(false);
    async function onSubmit(event) {
      event.preventDefault();
      isSubmitting.value = true;
      try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          body: JSON.stringify({
            service_id: "service_zcz9jfs",
            template_id: "template_wrjungi",
            user_id: "DUw16T85P5iAir2NQ",
            template_params: {
              "from_name": state.name,
              "from_email": state.email,
              "subject": state.subject,
              "message": state.message
            }
          }),
          headers: {
            "Content-Type": "application/json"
            // Fixed: proper header format
          }
        });
        if (response.ok) {
          toast.add({
            title: "Success",
            description: "Your message has been sent successfully!",
            color: "primary"
          });
          state.name = void 0;
          state.email = void 0;
          state.subject = void 0;
          state.message = void 0;
        } else {
          const errorData = await response.text();
          console.error("EmailJS Error:", errorData);
          throw new Error(`Failed to send email: ${response.status}`);
        }
      } catch (error) {
        console.error("Error sending email:", error);
        toast.add({
          title: "Error",
          description: "Failed to send message. Please try again.",
          color: "red"
        });
      } finally {
        isSubmitting.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = _sfc_main$2$2;
      const _component_UFormField = _sfc_main$1$2;
      const _component_UInput = _sfc_main$a;
      const _component_UTextarea = _sfc_main$c;
      const _component_UButton = _sfc_main$8$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Name",
              name: "name"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    size: "xl",
                    class: "w-full",
                    disabled: unref(isSubmitting)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event,
                      size: "xl",
                      class: "w-full",
                      disabled: unref(isSubmitting)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Email",
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    size: "xl",
                    class: "w-full",
                    disabled: unref(isSubmitting)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).email,
                      "onUpdate:modelValue": ($event) => unref(state).email = $event,
                      size: "xl",
                      class: "w-full",
                      disabled: unref(isSubmitting)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Subject",
              name: "subject"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).subject,
                    "onUpdate:modelValue": ($event) => unref(state).subject = $event,
                    size: "xl",
                    class: "w-full",
                    disabled: unref(isSubmitting)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).subject,
                      "onUpdate:modelValue": ($event) => unref(state).subject = $event,
                      size: "xl",
                      class: "w-full",
                      disabled: unref(isSubmitting)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Message",
              name: "message"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(state).message,
                    "onUpdate:modelValue": ($event) => unref(state).message = $event,
                    size: "xl",
                    placeholder: "Type your message here...",
                    class: "w-full",
                    disabled: unref(isSubmitting)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(state).message,
                      "onUpdate:modelValue": ($event) => unref(state).message = $event,
                      size: "xl",
                      placeholder: "Type your message here...",
                      class: "w-full",
                      disabled: unref(isSubmitting)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              class: "w-full flex items-center justify-center cursor-pointer",
              size: "xl",
              loading: unref(isSubmitting),
              disabled: unref(isSubmitting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(isSubmitting) ? "Sending..." : "Send Message")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(isSubmitting) ? "Sending..." : "Send Message"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormField, {
                label: "Name",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    size: "xl",
                    class: "w-full",
                    disabled: unref(isSubmitting)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "Email",
                name: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    size: "xl",
                    class: "w-full",
                    disabled: unref(isSubmitting)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "Subject",
                name: "subject"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).subject,
                    "onUpdate:modelValue": ($event) => unref(state).subject = $event,
                    size: "xl",
                    class: "w-full",
                    disabled: unref(isSubmitting)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "Message",
                name: "message"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    modelValue: unref(state).message,
                    "onUpdate:modelValue": ($event) => unref(state).message = $event,
                    size: "xl",
                    placeholder: "Type your message here...",
                    class: "w-full",
                    disabled: unref(isSubmitting)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                type: "submit",
                class: "w-full flex items-center justify-center cursor-pointer",
                size: "xl",
                loading: unref(isSubmitting),
                disabled: unref(isSubmitting)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(isSubmitting) ? "Sending..." : "Send Message"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactMe.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "ContactMe" });
const _imports_0 = publicAssetsURL("/svg/nuxt.svg");
const _imports_1 = publicAssetsURL("/svg/tailwind.svg");
const _imports_2 = publicAssetsURL("/svg/supabase.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContactMe = __nuxt_component_0;
  const _component_DownloadCv = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-t border-gray-600 mt-7" }, _attrs))}><footer class="text-white py-12 max-w-screen-lg mx-auto"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div><h3 class="text-xl font-bold mb-6">Get In Touch</h3>`);
  _push(ssrRenderComponent(_component_ContactMe, null, null, _parent));
  _push(`<div id="formMessage" class="mt-4 hidden"><div id="successMessage" class="bg-green-800 border border-green-600 text-green-100 px-4 py-3 rounded-lg hidden"><p class="font-medium">Message sent successfully!</p><p class="text-sm">Thank you for reaching out. I&#39;ll get back to you soon.</p></div><div id="errorMessage" class="bg-red-800 border border-red-600 text-red-100 px-4 py-3 rounded-lg hidden"><p class="font-medium">Oops! Something went wrong.</p><p class="text-sm">Please try again or contact me directly via email.</p></div></div></div><div><h3 class="text-xl font-bold mb-6">Let&#39;s Connect</h3><div class="space-y-6"><div class="space-y-4"><div class="flex items-center space-x-3"><div class="w-5 h-5 text-blue-400"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></div><span class="text-gray-300">alvinreggaelaroya@gmail.com</span></div><div class="flex items-center space-x-3"><div class="w-5 h-5 text-blue-400"><svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg></div><span class="text-gray-300">La Union, Philippines</span></div></div><div><h4 class="text-lg font-semibold mb-4">Follow Me</h4><div class="flex space-x-4"><a href="https://www.linkedin.com/in/alvin-laroya-bb409a1a0/" target="_blank" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path></svg></a><a href="https://github.com/alvinlaroya" target="_blank" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path></svg></a></div></div><div><h4 class="text-lg font-semibold mb-4">Quick Links</h4><div class="space-y-2"><a href="#about" class="block text-gray-300 hover:text-white transition-colors duration-200">About</a><a href="#portfolio" class="block text-gray-300 hover:text-white transition-colors duration-200">Portfolio</a>`);
  _push(ssrRenderComponent(_component_DownloadCv, { color: "bg-black" }, null, _parent));
  _push(`</div></div></div></div></div></div></footer><div class="border-t border-gray-800 py-3 text-center"><div class="flex max-w-screen-lg mx-auto flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"><p class="text-gray-400 text-sm"> © 2025 Alvin Laroya. All rights reserved. </p><div class="text-gray-400 text-sm flex space-x-2"><span>Designed &amp; Built with</span><img${ssrRenderAttr("src", _imports_0)} class="w-5 h-5" alt=""><img${ssrRenderAttr("src", _imports_1)} class="w-5 h-5" alt=""><img${ssrRenderAttr("src", _imports_2)} class="w-5 h-5" alt=""></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "Footer" });
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const route = useRoute();
    const admin = route.query.fbclid === config.public.adminKey;
    provide("admin", admin);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0$1;
      const _component_PersonalInformation = _sfc_main$4;
      const _component_Chat = _sfc_main$3;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#021526] text-[#eee] scroll-smooth" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="max-w-screen-lg mx-auto"><div class="flex flex-col md:flex-row">`);
      _push(ssrRenderComponent(_component_PersonalInformation, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Chat, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-B5sozUro.mjs.map
