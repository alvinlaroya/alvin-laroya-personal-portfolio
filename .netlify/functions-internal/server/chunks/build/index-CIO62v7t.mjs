import { mergeProps, computed, unref, ref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, isRef, toDisplayString, createCommentVNode, defineComponent, withAsyncContext, useSlots, toRef, resolveDynamicComponent, renderSlot, toHandlers, mergeModels, watch, useModel, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { l as useSeoMeta, _ as _export_sfc, d as __nuxt_component_1$1, e as _sfc_main$8$1, a as __nuxt_component_0$2, b as useAppConfig, c as usePortal, t as tv, k as __nuxt_component_0$1, f as useLocale, g as useButtonGroup, h as useComponentIcons, i as _sfc_main$e$1, j as _sfc_main$b$1 } from './server.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$d } from './Tooltip-Br75peob.mjs';
import { useForwardPropsEmits, VisuallyHidden, useForwardProps, Primitive, Separator } from 'reka-ui';
import { DrawerRootNested, DrawerRoot, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerContent, DrawerHandle, DrawerTitle, DrawerDescription } from 'vaul-vue';
import { reactivePick } from '@vueuse/core';
import { _ as _sfc_main$1$1, a as _sfc_main$e } from './Input-DfKQDC2l.mjs';
import useEmblaCarousel from 'embla-carousel-vue';
import { u as useFetch } from './fetch-B8NarSM6.mjs';
import '../_/nitro.mjs';
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
import 'pinia';
import 'vue-router';
import '@supabase/ssr';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@vue/shared';

const _sfc_main$c = {
  __name: "AboutMe",
  __ssrInlineRender: true,
  setup(__props) {
    const yearsOfExperience = computed(() => {
      const d = /* @__PURE__ */ new Date();
      let year = d.getFullYear();
      return parseInt(year) - 2019;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "border border-gray-600 rounded-md p-4"
      }, _attrs))}><h2 class="text-xl font-semibold">About Me</h2><p class="text-sm mt-3 text-gray-300 tracking-wide"> Results-driven Software Developer with ${ssrInterpolate(unref(yearsOfExperience))}+ years of experience building modern, high-performance e-commerce platforms. Skilled in Vue/Nuxt, Svelte/SvelteKit, React/Next, and Tailwind CSS. Proven track record in developing responsive, user-centric interfaces and integrating complex systems such as store management tools. Experienced in modernizing legacy applications to improve performance, usability, and efficiency. Passionate about creating innovative digital experiences that align with business goals and drive measurable results. </p></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutMe.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const theme$3 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default ring ring-default flex focus:outline-none",
    "handle": [
      "shrink-0 !bg-accented",
      "transition-opacity"
    ],
    "container": "w-full flex flex-col gap-4 p-4 overflow-y-auto",
    "header": "",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "body": "flex-1",
    "footer": "flex flex-col gap-1.5"
  },
  "variants": {
    "direction": {
      "top": {
        "content": "mb-24 flex-col-reverse",
        "handle": "mb-4"
      },
      "right": {
        "content": "flex-row",
        "handle": "!ml-4"
      },
      "bottom": {
        "content": "mt-24 flex-col",
        "handle": "mt-4"
      },
      "left": {
        "content": "flex-row-reverse",
        "handle": "!mr-4"
      }
    },
    "inset": {
      "true": {
        "content": "rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]"
      }
    }
  },
  "compoundVariants": [
    {
      "direction": [
        "top",
        "bottom"
      ],
      "class": {
        "content": "h-auto max-h-[96%]",
        "handle": "!w-12 !h-1.5 mx-auto"
      }
    },
    {
      "direction": [
        "right",
        "left"
      ],
      "class": {
        "content": "w-auto max-w-[calc(100%-2rem)]",
        "handle": "!h-12 !w-1.5 mt-auto mb-auto"
      }
    },
    {
      "direction": "top",
      "inset": true,
      "class": {
        "content": "inset-x-4 top-4"
      }
    },
    {
      "direction": "top",
      "inset": false,
      "class": {
        "content": "inset-x-0 top-0 rounded-b-lg"
      }
    },
    {
      "direction": "bottom",
      "inset": true,
      "class": {
        "content": "inset-x-4 bottom-4"
      }
    },
    {
      "direction": "bottom",
      "inset": false,
      "class": {
        "content": "inset-x-0 bottom-0 rounded-t-lg"
      }
    },
    {
      "direction": "left",
      "inset": true,
      "class": {
        "content": "inset-y-4 left-4"
      }
    },
    {
      "direction": "left",
      "inset": false,
      "class": {
        "content": "inset-y-0 left-0 rounded-r-lg"
      }
    },
    {
      "direction": "right",
      "inset": true,
      "class": {
        "content": "inset-y-4 right-4"
      }
    },
    {
      "direction": "right",
      "inset": false,
      "class": {
        "content": "inset-y-0 right-0 rounded-l-lg"
      }
    }
  ]
};
const _sfc_main$b = {
  __name: "UDrawer",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    inset: { type: Boolean, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    handle: { type: Boolean, required: false, default: true },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    nested: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    activeSnapPoint: { type: [Number, String, null], required: false },
    closeThreshold: { type: Number, required: false },
    shouldScaleBackground: { type: Boolean, required: false },
    setBackgroundColorOnScale: { type: Boolean, required: false },
    scrollLockTimeout: { type: Number, required: false },
    fixed: { type: Boolean, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    modal: { type: Boolean, required: false, default: true },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    direction: { type: String, required: false, default: "bottom" },
    noBodyStyles: { type: Boolean, required: false },
    handleOnly: { type: Boolean, required: false },
    preventScrollRestoration: { type: Boolean, required: false },
    snapPoints: { type: Array, required: false }
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "activeSnapPoint", "closeThreshold", "shouldScaleBackground", "setBackgroundColorOnScale", "scrollLockTimeout", "fixed", "dismissible", "modal", "open", "defaultOpen", "nested", "direction", "noBodyStyles", "handleOnly", "preventScrollRestoration", "snapPoints"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = {
      closeAutoFocus: (e) => e.preventDefault()
    };
    const ui = computed(() => tv({ extend: tv(theme$3), ...appConfig.ui?.drawer || {} })({
      direction: props.direction,
      inset: props.inset
    }));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.nested ? unref(DrawerRootNested) : unref(DrawerRoot)), mergeProps(unref(rootProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DrawerTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DrawerPortal), unref(portalProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DrawerOverlay), {
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DrawerContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, toHandlers(contentEvents)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.handle) {
                          _push4(ssrRenderComponent(unref(DrawerHandle), {
                            class: ui.value.handle({ class: props.ui?.handle })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DrawerTitle), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DrawerDescription), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          _push4(`<div class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId3}>`);
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DrawerTitle), {
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DrawerDescription), {
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                            key: 0,
                            class: ui.value.handle({ class: props.ui?.handle })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => [
                            createVNode("div", {
                              class: ui.value.container({ class: props.ui?.container })
                            }, [
                              !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: props.ui?.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                    key: 0,
                                    class: ui.value.title({ class: props.ui?.title })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                    key: 1,
                                    class: ui.value.description({ class: props.ui?.description })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.body({ class: props.ui?.body })
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: ui.value.footer({ class: props.ui?.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DrawerContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, contentProps.value, toHandlers(contentEvents)), {
                      default: withCtx(() => [
                        __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                          key: 0,
                          class: ui.value.handle({ class: props.ui?.handle })
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => [
                          createVNode("div", {
                            class: ui.value.container({ class: props.ui?.container })
                          }, [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: props.ui?.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => [
                                __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                  key: 0,
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title", {}, () => [
                                      createTextVNode(toDisplayString(__props.title), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true),
                                __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                  key: 1,
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "description", {}, () => [
                                      createTextVNode(toDisplayString(__props.description), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: props.ui?.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: props.ui?.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ])
                      ]),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DrawerTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DrawerPortal), unref(portalProps), {
                default: withCtx(() => [
                  __props.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                    key: 0,
                    class: ui.value.overlay({ class: props.ui?.overlay })
                  }, null, 8, ["class"])) : createCommentVNode("", true),
                  createVNode(unref(DrawerContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, toHandlers(contentEvents)), {
                    default: withCtx(() => [
                      __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                        key: 0,
                        class: ui.value.handle({ class: props.ui?.handle })
                      }, null, 8, ["class"])) : createCommentVNode("", true),
                      !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                        default: withCtx(() => [
                          __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", {}, () => [
                        createVNode("div", {
                          class: ui.value.container({ class: props.ui?.container })
                        }, [
                          !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ui.value.header({ class: props.ui?.header })
                          }, [
                            renderSlot(_ctx.$slots, "header", {}, () => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                key: 0,
                                class: ui.value.title({ class: props.ui?.title })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                key: 1,
                                class: ui.value.description({ class: props.ui?.description })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          !!slots.body ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: ui.value.body({ class: props.ui?.body })
                          }, [
                            renderSlot(_ctx.$slots, "body")
                          ], 2)) : createCommentVNode("", true),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: ui.value.footer({ class: props.ui?.footer })
                          }, [
                            renderSlot(_ctx.$slots, "footer")
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ])
                    ]),
                    _: 3
                  }, 16, ["class"])
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const experiences = [{ "position": "Frontend Developer (2022-June 2025) - Contract", "frontend": "Vue/Nuxt, Svelte/Sveltekit, Shadcn Svelte / TailwindCSS", "backend": "Storefront, Shopify GraphQL, Knex.js, PostgreSQL, Drizzle ORM, Supabase", "company": "Pilothouse Digital", "address": "#1011 Government St, Victoria, BC V8W 1X6, Canada", "stacks": ["vue", "nuxt", "svelte", "tailwind", "shadcn", "node", "postgresql", "prisma", "supabase"], "roles": [{ "task": "Engineered a Headless CMS E-commerce solution for Shopify stores, managing backend migrations and services.", "subtask": ["Incorporated an AI feature to generate a component store, utilizing Svelte-based components and Tailwind CSS for styling", "Convert the Liquid-based Shopify store into a modern JavaScript framework using SvelteKit for a lightweight and high-performance site.", "Developed a robust drag-and-drop functionality for seamlessly adding modules to site pages, including the homepage, collection pages, and product detail pages (PDP).", "Created multiple modules (components) for a store template, enhancing the homepage, collection pages, and product detail pages (PDP).", "Implemented comprehensive cart functionality using Svelte, integrating Shopify's Storefront GraphQL API to streamline data mutations.", "Established template theming with DaisyUI to bolster store branding.", "Integrated third-party Shopify libraries, including Rebuy for upselling functionalities and various review APIs.", "Designed and executed modules/component tests using vitest.", "Formulated storefront GraphQL queries and mutations for headless CMS architecture."] }, { "task": "Convert Liquid-based Shopify store into modern Javascript framework using Nuxt/Vue.", "subtask": ["Achieved pixel-perfect design conversion for the site using solely Nuxt, eliminating dependency on any CMS."] }] }, { "position": "Fullstack Developer (2021-2022) - Fulltime", "frontend": "React, Next.js, Material UI, Vue/Vuetify", "backend": "JS-force, Salesforce, Node, Express", "company": "ArchIntel Corp.", "address": "#8245 Boone Blvd # 650, Tysons, VA 22182, Estados Unidos", "stacks": ["vue", "react", "next", "vuetify", "materialui", "node", "express"], "roles": [{ "task": "Developed the frontend of the Chassis/System for a video interview platform to be used by seven users, including video editors.", "subtask": [] }, { "task": "Maintaining the chassis/system for social media chassis currently being used by the US team.", "subtask": [] }, { "task": "Developed a chassis/system for the company’s digital asset library (similar to Google Drive) facilitating the uploadinguploading and downloading of various asset types, such as images and videos.", "subtask": [] }] }, { "position": "Full Stack Developer (2020-2021) - Fulltime", "frontend": "Vue/Vuetify", "backend": "Laravel API", "company": "Elite Anywhere Corp.", "address": "#82585 Showcase Pkwy Indio, CA 92203", "stacks": ["vue", "vuetify", "laravel"], "roles": [{ "task": "Migrated the logistics web application from a Laravel Blade-based application to a Laravel Vue Single Page Application (SPA), enhancing user experience and performance.", "subtask": [] }] }, { "position": "Jr. Web Developer (2019-2020) - Fulltime", "frontend": "Vue/Nuxt/Vuetify, React Native", "backend": "Firebase Firestore", "company": "TaraPhilippines", "address": "#2 Roman Ayson Rd,. Upper Bokawkan, Baguio City", "stacks": ["vue", "nuxt", "vuetify", "react", "node", "firebase"], "roles": [{ "task": "Developed Skood (Admin Dashboard) Food Delivery App of Baguio City.", "subtask": ["Created dashboard for Admin (Company)", "Created dashboard for sellers (Restaurant owner)", "Created dashboard for riders (Delivery Rider)", "Developed Skood (server) for automatic backend dispatching of incoming orders"] }] }];
const _sfc_main$a = {
  __name: "Experiences",
  __ssrInlineRender: true,
  setup(__props) {
    const openDrawer = ref(false);
    const selectedExperience = ref(null);
    const selectExperienceHandler = (value) => {
      selectedExperience.value = value;
      openDrawer.value = true;
    };
    const closeDrawer = () => openDrawer.value = !openDrawer.value;
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      const _component_UAvatarGroup = _sfc_main$2$1;
      const _component_UTooltip = _sfc_main$d;
      const _component_UButton = _sfc_main$8$1;
      const _component_UDrawer = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "experience" }, _attrs))}><h2 class="text-xl font-semibold mb-3">Experiences</h2><!--[-->`);
      ssrRenderList(unref(experiences), (exp, i) => {
        _push(`<div class="bg-[#03101d] p-4 rounded-md text-sm space-y-1.5 my-2.5"><h2 class="font-semibold text-sm tracking-wide">${ssrInterpolate(exp.position)}</h2><div class="flex space-x-2 text-gray-400 text-xs tracking-wide"><h2 class="font-semibold">Company:</h2><div><span class="text-gray-200">${ssrInterpolate(exp.company)}</span><span class="mx-2">•</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:map-pin",
          size: "0.8rem",
          class: "-mb-0.5 mr-2"
        }, null, _parent));
        _push(`<span class="text-gray-200">${ssrInterpolate(exp.address)}</span></div></div><div class="flex justify-between">`);
        _push(ssrRenderComponent(_component_UAvatarGroup, {
          size: "xs",
          max: 4,
          class: "mt-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(exp.stacks, (stack) => {
                _push2(ssrRenderComponent(_component_UTooltip, { text: stack }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", `/svg/${stack}.svg`)} class="h-5 w-5"${ssrRenderAttr("alt", stack)}${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: `/svg/${stack}.svg`,
                          class: "h-5 w-5",
                          alt: stack
                        }, null, 8, ["src", "alt"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(exp.stacks, (stack) => {
                  return openBlock(), createBlock(_component_UTooltip, { text: stack }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: `/svg/${stack}.svg`,
                        class: "h-5 w-5",
                        alt: stack
                      }, null, 8, ["src", "alt"])
                    ]),
                    _: 2
                  }, 1032, ["text"]);
                }), 256))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          onClick: ($event) => selectExperienceHandler(exp),
          "trailing-icon": "i-lucide-arrow-right",
          class: "cursor-pointer mt-1",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`View More `);
            } else {
              return [
                createTextVNode("View More ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_UDrawer, {
        direction: "right",
        open: unref(openDrawer),
        "onUpdate:open": ($event) => isRef(openDrawer) ? openDrawer.value = $event : null,
        handle: false,
        inset: ""
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[40rem] p-3 lg:p-6 flex flex-col space-y-5 flex-nowrap overflow-y-auto"${_scopeId}><div class="flex justify-end sticky top-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              onClick: closeDrawer,
              color: "error",
              "trailing-icon": "i-lucide-x",
              class: "cursor-pointer mt-1",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="font-semibold text-lg"${_scopeId}>${ssrInterpolate(unref(selectedExperience).position)}</h2><div class="flex space-x-2 text-sm tracking-wider"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:building-2",
              size: "1rem"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-gray-300"${_scopeId}>${ssrInterpolate(unref(selectedExperience).company)}</span></div><div class="flex space-x-2 text-sm tracking-wider -mt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:map-pin",
              size: "1rem"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-gray-300"${_scopeId}>${ssrInterpolate(unref(selectedExperience).address)}</span></div><div class="flex flex-col"${_scopeId}><h2 class="font-normal text-sm tracking-wider"${_scopeId}>Technologies Stack:</h2><div class="flex flex-row space-x-2 flex-wrap gap-y-2 mt-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(selectedExperience).stacks, (stack, stackIdx) => {
              _push2(`<div class="bg-transparent text-whte border border-gray-500 font-semibold text-xs text-nowrap flex space-x-2 px-2 py-1 rounded-md"${_scopeId}>`);
              if (stack !== void 0) {
                _push2(`<div class="flex"${_scopeId}><img${ssrRenderAttr("src", `/svg/${stack}.svg`)} class="w-4 h-4" alt=""${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>${ssrInterpolate(capitalize(stack))}</span></div>`);
            });
            _push2(`<!--]--></div></div><div class="text-sm font-thin tracking-wider"${_scopeId}><h2 class="font-normal text-sm tracking-wider"${_scopeId}>Task/Role:</h2><ol class="list-decimal pl-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(selectedExperience).roles, (role, roleIdx) => {
              _push2(`<li class="my-2"${_scopeId}>${ssrInterpolate(role.task)} <ul class="list-disc ml-9"${_scopeId}><!--[-->`);
              ssrRenderList(role.subtask, (task, taskIdx) => {
                _push2(`<li class="my-1"${_scopeId}>${ssrInterpolate(task)}</li>`);
              });
              _push2(`<!--]--></ul></li>`);
            });
            _push2(`<!--]--></ol></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[40rem] p-3 lg:p-6 flex flex-col space-y-5 flex-nowrap overflow-y-auto" }, [
                createVNode("div", { class: "flex justify-end sticky top-0" }, [
                  createVNode(_component_UButton, {
                    onClick: closeDrawer,
                    color: "error",
                    "trailing-icon": "i-lucide-x",
                    class: "cursor-pointer mt-1",
                    size: "sm"
                  })
                ]),
                createVNode("h2", { class: "font-semibold text-lg" }, toDisplayString(unref(selectedExperience).position), 1),
                createVNode("div", { class: "flex space-x-2 text-sm tracking-wider" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:building-2",
                    size: "1rem"
                  }),
                  createVNode("span", { class: "text-gray-300" }, toDisplayString(unref(selectedExperience).company), 1)
                ]),
                createVNode("div", { class: "flex space-x-2 text-sm tracking-wider -mt-3" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:map-pin",
                    size: "1rem"
                  }),
                  createVNode("span", { class: "text-gray-300" }, toDisplayString(unref(selectedExperience).address), 1)
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("h2", { class: "font-normal text-sm tracking-wider" }, "Technologies Stack:"),
                  createVNode("div", { class: "flex flex-row space-x-2 flex-wrap gap-y-2 mt-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedExperience).stacks, (stack, stackIdx) => {
                      return openBlock(), createBlock("div", {
                        key: stackIdx,
                        class: "bg-transparent text-whte border border-gray-500 font-semibold text-xs text-nowrap flex space-x-2 px-2 py-1 rounded-md"
                      }, [
                        stack !== void 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex"
                        }, [
                          createVNode("img", {
                            src: `/svg/${stack}.svg`,
                            class: "w-4 h-4",
                            alt: ""
                          }, null, 8, ["src"])
                        ])) : createCommentVNode("", true),
                        createVNode("span", null, toDisplayString(capitalize(stack)), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "text-sm font-thin tracking-wider" }, [
                  createVNode("h2", { class: "font-normal text-sm tracking-wider" }, "Task/Role:"),
                  createVNode("ol", { class: "list-decimal pl-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedExperience).roles, (role, roleIdx) => {
                      return openBlock(), createBlock("li", {
                        key: roleIdx,
                        class: "my-2"
                      }, [
                        createTextVNode(toDisplayString(role.task) + " ", 1),
                        createVNode("ul", { class: "list-disc ml-9" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(role.subtask, (task, taskIdx) => {
                            return openBlock(), createBlock("li", {
                              key: taskIdx,
                              class: "my-1"
                            }, toDisplayString(task), 1);
                          }), 128))
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Experiences.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "TechStack",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const frontendStacks = [
      {
        name: "Vue.js",
        svg: "/svg/vue.svg"
      },
      {
        name: "React.js",
        svg: "/svg/react.svg"
      },
      {
        name: "Svelte",
        svg: "/svg/svelte.svg"
      },
      {
        name: "React Native Expo",
        svg: "/svg/react.svg"
      },
      {
        name: "Nuxt",
        svg: "/svg/nuxt.svg"
      },
      {
        name: "Next.js",
        svg: "/svg/next.svg"
      },
      {
        name: "Tailwind CSS",
        svg: "/svg/tailwind.svg"
      },
      {
        name: "Shadcn UI",
        svg: "/svg/shadcn.svg"
      },
      {
        name: "Vuetify",
        svg: "/svg/vuetify.svg"
      },
      {
        name: "Material UI",
        svg: "/svg/materialui.svg"
      },
      {
        name: "Zod",
        svg: "/svg/zod.svg"
      },
      {
        name: "Postman",
        svg: "/svg/postman.svg"
      }
    ];
    const filteredFrontend = computed(() => {
      if (!search.value) {
        return frontendStacks;
      }
      return frontendStacks.filter(
        (stack) => stack.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });
    const stateManagementStacks = [
      {
        name: "Pinia",
        svg: "/svg/pinia.svg"
      },
      {
        name: "Vuex",
        svg: "/svg/vue.svg"
      },
      {
        name: "Redux",
        svg: "/svg/redux.svg"
      },
      {
        name: "Zustand"
      }
    ];
    const filteredStateManagement = computed(() => {
      if (!search.value) {
        return stateManagementStacks;
      }
      return stateManagementStacks.filter(
        (stack) => stack.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });
    const backendStacks = [
      {
        name: "Node.js",
        svg: "/svg/node.svg"
      },
      {
        name: "Typescript",
        svg: "/svg/typescript.svg"
      },
      {
        name: "Prisma",
        svg: "/svg/prisma.svg"
      },
      {
        name: "Drizzle ORM",
        svg: "/svg/node.svg"
      },
      {
        name: "Knex.js",
        svg: "/svg/node.svg"
      },
      {
        name: "Express.js",
        svg: "/svg/express.svg"
      },
      {
        name: "PostgreSQL",
        svg: "/svg/postgresql.svg"
      },
      {
        name: "MySQL",
        svg: "/svg/mysql.svg"
      },
      {
        name: "Firebase",
        svg: "/svg/firebase.svg"
      },
      {
        name: "Supabase",
        svg: "/svg/supabase.svg"
      },
      {
        name: "REST"
      },
      {
        name: "GraphQL",
        svg: "/svg/graphql.svg"
      },
      {
        name: "Storefront API"
      }
    ];
    const filteredBackend = computed(() => {
      if (!search.value) {
        return backendStacks;
      }
      return backendStacks.filter(
        (stack) => stack.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });
    const uiUxDesignStacks = [
      {
        name: "Adobe Photoshop",
        svg: "/svg/photoshop.svg"
      },
      {
        name: "Figma",
        svg: "/svg/figma.svg"
      }
    ];
    const filteredDesign = computed(() => {
      if (!search.value) {
        return uiUxDesignStacks;
      }
      return uiUxDesignStacks.filter(
        (stack) => stack.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });
    const aiStacks = [
      {
        name: "OpenAI",
        svg: "/svg/openai.svg"
      },
      {
        name: "Antrophic"
      },
      {
        name: "N8n AI Automation",
        svg: "/svg/n8n.svg"
      },
      {
        name: "Claude AI",
        svg: "/svg/claude.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="flex flex-col lg:flex-row justify-between"><h2 class="text-xl font-semibold">Tech Stack:</h2>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(search),
        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
        class: "mt-2 lg:mt-0",
        icon: "i-lucide-search",
        size: "md",
        variant: "outline",
        placeholder: "Search..."
      }, null, _parent));
      _push(`</div><div class="mt-3"><div><h2 class="font-semibold text-sm">Frontend Technologies:</h2>`);
      if (unref(filteredFrontend).length > 0) {
        _push(`<div class="flex flex-wrap mt-2 gap-1.5"><!--[-->`);
        ssrRenderList(unref(filteredFrontend), (stack) => {
          _push(`<div class="flex space-x-2 border border-gray-500 px-2 py-1 rounded-md text-xs items-center text-gray-300 hover:bg-primary hover:text-black">`);
          if (stack?.svg !== void 0) {
            _push(`<div class="flex"><img${ssrRenderAttr("src", stack.svg)} class="w-4 h-4" alt=""></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(stack.name)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div><span class="text-sm text-gray-500">No Results</span></div>`);
      }
      _push(`</div><div class="mt-5"><h2 class="font-semibold text-sm">State Management:</h2>`);
      if (unref(filteredStateManagement).length > 0) {
        _push(`<div class="flex flex-wrap mt-2 gap-1.5"><!--[-->`);
        ssrRenderList(unref(filteredStateManagement), (stack) => {
          _push(`<div class="flex space-x-2 border border-gray-500 px-2 py-1 rounded-md text-xs items-center text-gray-300 hover:bg-primary hover:text-black">`);
          if (stack?.svg !== void 0) {
            _push(`<div class="flex"><img${ssrRenderAttr("src", stack.svg)} class="w-4 h-4" alt=""></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(stack.name)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div><span class="text-sm text-gray-500">No Results</span></div>`);
      }
      _push(`</div><div class="mt-5"><h2 class="font-semibold text-sm">Backend Technologies:</h2>`);
      if (unref(filteredBackend).length > 0) {
        _push(`<div class="flex flex-wrap mt-2 gap-1.5"><!--[-->`);
        ssrRenderList(unref(filteredBackend), (stack) => {
          _push(`<div class="flex space-x-2 border border-gray-500 px-2 py-1 rounded-md text-xs items-center text-gray-300 hover:bg-primary hover:text-black">`);
          if (stack?.svg !== void 0) {
            _push(`<div class="flex"><img${ssrRenderAttr("src", stack.svg)} class="w-4 h-4" alt=""></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(stack.name)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div><span class="text-sm text-gray-500">No Results</span></div>`);
      }
      _push(`</div><div class="mt-5"><h2 class="font-semibold text-sm">UI/UX Design:</h2>`);
      if (unref(filteredDesign).length > 0) {
        _push(`<div class="flex flex-wrap mt-2 gap-1.5"><!--[-->`);
        ssrRenderList(unref(filteredDesign), (stack) => {
          _push(`<div class="flex space-x-2 border border-gray-500 px-2 py-1 rounded-md text-xs items-center text-gray-300 hover:bg-primary hover:text-black">`);
          if (stack?.svg !== void 0) {
            _push(`<div class="flex"><img${ssrRenderAttr("src", stack.svg)} class="w-4 h-4" alt=""></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(stack.name)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div><span class="text-sm text-gray-500">No Results</span></div>`);
      }
      _push(`</div><div class="mt-5"><h2 class="font-semibold text-sm">AI/LLM Tools:</h2><div class="flex flex-wrap mt-2 gap-1.5"><!--[-->`);
      ssrRenderList(aiStacks, (stack) => {
        _push(`<div class="flex space-x-2 border border-gray-500 px-2 py-1 rounded-md text-xs items-center text-gray-300 hover:bg-primary hover:text-black">`);
        if (stack?.svg !== void 0) {
          _push(`<div class="flex"><img${ssrRenderAttr("src", stack.svg)} class="w-4 h-4" alt=""></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${ssrInterpolate(stack.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TechStack.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-accented rounded-full",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "data-[state=active]:bg-inverted"
      }
    }
  }
};
const _sfc_main$8 = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prev: { type: Object, required: false },
    prevIcon: { type: String, required: false },
    next: { type: Object, required: false },
    nextIcon: { type: String, required: false },
    arrows: { type: Boolean, required: false, default: false },
    dots: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "horizontal" },
    items: { type: Array, required: false },
    autoplay: { type: [Boolean, Object], required: false, default: false },
    autoScroll: { type: [Boolean, Object], required: false, default: false },
    autoHeight: { type: [Boolean, Object], required: false, default: false },
    classNames: { type: [Boolean, Object], required: false, default: false },
    fade: { type: [Boolean, Object], required: false, default: false },
    wheelGestures: { type: Boolean, required: false, skipCheck: true, default: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    align: { type: [String, Function], required: false, default: "center" },
    containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" },
    slidesToScroll: { type: [String, Number], required: false, default: 1 },
    dragFree: { type: Boolean, required: false, default: false },
    dragThreshold: { type: Number, required: false, default: 10 },
    inViewThreshold: { type: null, required: false, default: 0 },
    loop: { type: Boolean, required: false, default: false },
    skipSnaps: { type: Boolean, required: false, default: false },
    duration: { type: Number, required: false, default: 25 },
    startIndex: { type: Number, required: false, default: 0 },
    watchDrag: { type: [Boolean, Function], required: false, default: true },
    watchResize: { type: [Boolean, Function], required: false, default: true },
    watchSlides: { type: [Boolean, Function], required: false, default: true },
    watchFocus: { type: [Boolean, Function], required: false, default: true },
    active: { type: Boolean, required: false, default: true },
    breakpoints: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.carousel || {} })({
      orientation: props.orientation
    }));
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = ref([]);
    async function loadPlugins() {
      const emblaPlugins = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('../_/embla-carousel-wheel-gestures.esm.mjs');
        emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      plugins.value = emblaPlugins;
    }
    watch(() => [props.autoplay, props.autoScroll, props.autoHeight, props.classNames, props.fade, props.wheelGestures], loadPlugins, { immediate: true });
    const [emblaRef, emblaApi] = useEmblaCarousel(options.value, plugins.value);
    watch([options, plugins], () => {
      emblaApi.value?.reInit(options.value, plugins.value);
    });
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
    }
    function scrollTo(index) {
      emblaApi.value?.scrollTo(index);
    }
    function onKeyDown(event) {
      const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
      const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
              }))}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.arrows || __props.dots) {
              _push2(`<div class="${ssrRenderClass(ui.value.controls({ class: props.ui?.controls }))}"${_scopeId}>`);
              if (__props.arrows) {
                _push2(`<div class="${ssrRenderClass(ui.value.arrows({ class: props.ui?.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$8$1, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof __props.prev === "object" ? __props.prev : void 0, {
                  class: ui.value.prev({ class: props.ui?.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$8$1, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof __props.next === "object" ? __props.next : void 0, {
                  class: ui.value.next({ class: props.ui?.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.dots) {
                _push2(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} class="${ssrRenderClass(ui.value.dots({ class: props.ui?.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  _push2(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} class="${ssrRenderClass(ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                class: ui.value.viewport({ class: props.ui?.viewport })
              }, [
                createVNode("div", {
                  class: ui.value.container({ class: props.ui?.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                    return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                      class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
                    }), [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 16);
                  }), 128))
                ], 2)
              ], 2),
              __props.arrows || __props.dots ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.controls({ class: props.ui?.controls })
              }, [
                __props.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.arrows({ class: props.ui?.arrows })
                }, [
                  createVNode(_sfc_main$8$1, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof __props.prev === "object" ? __props.prev : void 0, {
                    class: ui.value.prev({ class: props.ui?.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$8$1, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof __props.next === "object" ? __props.next : void 0, {
                    class: ui.value.next({ class: props.ui?.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                __props.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  role: "tablist",
                  "aria-label": unref(t)("carousel.dots"),
                  class: ui.value.dots({ class: props.ui?.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    return openBlock(), createBlock("button", {
                      key: index,
                      type: "button",
                      role: "tab",
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      "aria-selected": selectedIndex.value === index,
                      class: ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }),
                      "data-state": selectedIndex.value === index ? "active" : void 0,
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "aria-selected", "data-state", "onClick"]);
                  }), 128))
                ], 10, ["aria-label"])) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-md",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    },
    "square": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-primary text-inverted"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-secondary text-inverted"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-success text-inverted"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-info text-inverted"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-warning text-inverted"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-error text-inverted"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-primary ring ring-inset ring-primary/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-secondary ring ring-inset ring-secondary/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-success ring ring-inset ring-success/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-info ring ring-inset ring-info/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-warning ring ring-inset ring-warning/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-error ring ring-inset ring-error/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-primary/10 text-primary"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-secondary/10 text-secondary"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-success/10 text-success"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-info/10 text-info"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-warning/10 text-warning"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-error/10 text-error"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-primary/10 text-primary ring ring-inset ring-primary/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-success/10 text-success ring ring-inset ring-success/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-info/10 text-info ring ring-inset ring-info/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-warning/10 text-warning ring ring-inset ring-warning/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-error/10 text-error ring ring-inset ring-error/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-inverted bg-inverted"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-accented text-default bg-default"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-default bg-elevated"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-accented text-default bg-elevated"
    },
    {
      "size": "xs",
      "square": true,
      "class": "p-0.5"
    },
    {
      "size": "sm",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "md",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "lg",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "xl",
      "square": true,
      "class": "p-1"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};
const _sfc_main$7 = {
  __name: "UBadge",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "span" },
    label: { type: [String, Number], required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    square: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: String, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: String, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.badge || {} })({
      color: props.color,
      variant: props.variant,
      size: buttonGroupSize.value || props.size,
      square: props.square || !slots.default && !props.label,
      buttonGroup: orientation.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.base({ class: [props.ui?.base, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              if (unref(isLeading) && unref(leadingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$e$1, {
                  name: unref(leadingIconName),
                  class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                }, null, _parent2, _scopeId));
              } else if (!!__props.avatar) {
                _push2(ssrRenderComponent(_sfc_main$b$1, mergeProps({
                  size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                }, __props.avatar, {
                  class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (__props.label !== void 0 && __props.label !== null) {
                _push2(`<span class="${ssrRenderClass(ui.value.label({ class: props.ui?.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
              if (unref(isTrailing) && unref(trailingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$e$1, {
                  name: unref(trailingIconName),
                  class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => [
                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$e$1, {
                  key: 0,
                  name: unref(leadingIconName),
                  class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$b$1, mergeProps({
                  key: 1,
                  size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                }, __props.avatar, {
                  class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "default", {}, () => [
                __props.label !== void 0 && __props.label !== null ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: ui.value.label({ class: props.ui?.label })
                }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "trailing", {}, () => [
                unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$e$1, {
                  key: 0,
                  name: unref(trailingIconName),
                  class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        src: "/projects/wise.webp",
        link: "https://github.com/alvinlaroya/dal2.0",
        title: "Wise - Headless Shopify CMS",
        description: "A custom CMS built for a headless Shopify store, enabling easy management of products, content, and storefront data.",
        stacks: ["svelte", "tailwind"],
        isInternal: true
      },
      {
        src: "/projects/dal.webp",
        link: "https://github.com/alvinlaroya/dal2.0",
        title: "Digital Assets Library",
        description: "Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design.",
        stacks: ["vue", "vuetify"],
        isInternal: true
      },
      {
        src: "/projects/archintel-chasis.webp",
        link: "https://github.com/alvinlaroya/vue-vuex-vuetify-router/tree/master",
        title: "Archintel Corp. Chasis",
        description: "Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design.",
        stacks: ["vue", "vuetify"],
        isInternal: true
      },
      {
        src: "/projects/skood.webp",
        link: "https://github.com/alvinlaroya/vue-vuex-vuetify-router/tree/master",
        title: "Skood",
        description: "A dashboard application for managing restaurant clients and their food products, making it easy to add, organize, and track client details and menus.",
        stacks: ["vue", "vuetify", "firebase"],
        isInternal: true
      },
      {
        src: "/projects/journee.webp",
        link: "https://journeecollection.com/collections/all",
        title: "Journee Collection Store",
        description: "Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design",
        stacks: ["vue", "nuxt", "tailwind"],
        isInternal: false
      },
      {
        src: "/projects/brett-tech.webp",
        link: "https://brett-tech-store.netlify.app/collections/frontpage",
        title: "Brett Tech Store",
        description: "Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design.",
        stacks: ["vue", "nuxt", "tailwind"],
        isInternal: false
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = _sfc_main$8;
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_UBadge = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "portfolio" }, _attrs))} data-v-32b24623><h2 class="text-xl font-semibold" data-v-32b24623>Projects</h2>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        arrows: "",
        dots: "",
        "class-names": "",
        items: projects,
        ui: { item: "base-1 lg:basis-1/2" }
      }, {
        default: withCtx(({ item: project }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="group relative rounded-lg shadow-2xl cursor-pointer transform transition-all duration-500 hover:shadow-3xl my-5" data-v-32b24623${_scopeId}><div class="relative w-full h-54 overflow-hidden rounded-lg" data-v-32b24623${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: project.src,
              fit: "cover",
              alt: "profile-image",
              width: "500",
              height: "350",
              class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute inset-0 card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-v-32b24623${_scopeId}></div><div class="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center" data-v-32b24623${_scopeId}><h3 class="text-sm font-bold mb-3 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200" data-v-32b24623${_scopeId}>${ssrInterpolate(project.title)}</h3><p class="text-xs leading-relaxed mb-6 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-600 delay-300" data-v-32b24623${_scopeId}>${ssrInterpolate(project.description)}</p><div class="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400" data-v-32b24623${_scopeId}><a${ssrRenderAttr("href", project.isInternal ? "/" : project.link)}${ssrRenderAttr("target", project.isInternal ? "" : "_blank")} class="px-4 py-1 bg-primary text-black rounded-lg text-sm font-medium hover:bg-black hover:text-white duration-200 shadow-lg" data-v-32b24623${_scopeId}> Explore Now </a></div></div></div><div class="flex justify-between items-center py-1 mt-1 px-1" data-v-32b24623${_scopeId}><span class="text-sm text-white" data-v-32b24623${_scopeId}>${ssrInterpolate(project.title)}</span>`);
            if (project.isInternal) {
              _push2(ssrRenderComponent(_component_UBadge, {
                class: "font-normal",
                color: "neutral",
                variant: "outline"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Internal `);
                  } else {
                    return [
                      createTextVNode(" Internal ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "group relative rounded-lg shadow-2xl cursor-pointer transform transition-all duration-500 hover:shadow-3xl my-5" }, [
                createVNode("div", { class: "relative w-full h-54 overflow-hidden rounded-lg" }, [
                  createVNode(_component_NuxtImg, {
                    src: project.src,
                    fit: "cover",
                    alt: "profile-image",
                    width: "500",
                    height: "350",
                    class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "absolute inset-0 card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                  createVNode("div", { class: "absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center" }, [
                    createVNode("h3", { class: "text-sm font-bold mb-3 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200" }, toDisplayString(project.title), 1),
                    createVNode("p", { class: "text-xs leading-relaxed mb-6 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-600 delay-300" }, toDisplayString(project.description), 1),
                    createVNode("div", { class: "transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400" }, [
                      createVNode("a", {
                        href: project.isInternal ? "/" : project.link,
                        target: project.isInternal ? "" : "_blank",
                        class: "px-4 py-1 bg-primary text-black rounded-lg text-sm font-medium hover:bg-black hover:text-white duration-200 shadow-lg"
                      }, " Explore Now ", 8, ["href", "target"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex justify-between items-center py-1 mt-1 px-1" }, [
                  createVNode("span", { class: "text-sm text-white" }, toDisplayString(project.title), 1),
                  project.isInternal ? (openBlock(), createBlock(_component_UBadge, {
                    key: 0,
                    class: "font-normal",
                    color: "neutral",
                    variant: "outline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Internal ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-32b24623"]]);
const theme = {
  "slots": {
    "root": "flex gap-1.5",
    "item": "group relative flex flex-1 gap-3",
    "container": "relative flex items-center gap-1.5",
    "indicator": "group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted",
    "separator": "flex-1 rounded-full bg-elevated",
    "wrapper": "w-full",
    "date": "text-dimmed text-xs/5",
    "title": "font-medium text-highlighted text-sm",
    "description": "text-muted text-wrap text-sm"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex-row w-full",
        "item": "flex-col",
        "separator": "h-0.5"
      },
      "vertical": {
        "root": "flex-col",
        "container": "flex-col",
        "separator": "w-0.5"
      }
    },
    "color": {
      "primary": {
        "indicator": "group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary"
      },
      "secondary": {
        "indicator": "group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary"
      },
      "success": {
        "indicator": "group-data-[state=completed]:bg-success group-data-[state=active]:bg-success"
      },
      "info": {
        "indicator": "group-data-[state=completed]:bg-info group-data-[state=active]:bg-info"
      },
      "warning": {
        "indicator": "group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning"
      },
      "error": {
        "indicator": "group-data-[state=completed]:bg-error group-data-[state=active]:bg-error"
      },
      "neutral": {
        "indicator": "group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted"
      }
    },
    "size": {
      "3xs": "",
      "2xs": "",
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": "",
      "2xl": "",
      "3xl": ""
    },
    "reverse": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-primary"
      }
    },
    {
      "color": "secondary",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-secondary"
      }
    },
    {
      "color": "success",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-success"
      }
    },
    {
      "color": "info",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-info"
      }
    },
    {
      "color": "warning",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-warning"
      }
    },
    {
      "color": "error",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-error"
      }
    },
    {
      "color": "primary",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-primary group-data-[state=completed]:bg-primary"
      }
    },
    {
      "color": "secondary",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-secondary group-data-[state=completed]:bg-secondary"
      }
    },
    {
      "color": "success",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-success group-data-[state=completed]:bg-success"
      }
    },
    {
      "color": "info",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-info group-data-[state=completed]:bg-info"
      }
    },
    {
      "color": "warning",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-warning group-data-[state=completed]:bg-warning"
      }
    },
    {
      "color": "error",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-error group-data-[state=completed]:bg-error"
      }
    },
    {
      "color": "neutral",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-inverted"
      }
    },
    {
      "color": "neutral",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-inverted group-data-[state=completed]:bg-inverted"
      }
    },
    {
      "orientation": "horizontal",
      "size": "3xs",
      "class": {
        "wrapper": "pe-4.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xs",
      "class": {
        "wrapper": "pe-5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "wrapper": "pe-5.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "wrapper": "pe-6"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "wrapper": "pe-6.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "wrapper": "pe-7"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "wrapper": "pe-7.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xl",
      "class": {
        "wrapper": "pe-8"
      }
    },
    {
      "orientation": "horizontal",
      "size": "3xl",
      "class": {
        "wrapper": "pe-8.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "3xs",
      "class": {
        "wrapper": "-mt-0.5 pb-4.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "2xs",
      "class": {
        "wrapper": "pb-5"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "wrapper": "mt-0.5 pb-5.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "wrapper": "mt-1 pb-6"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "wrapper": "mt-1.5 pb-6.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "wrapper": "mt-2 pb-7"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "wrapper": "mt-2.5 pb-7.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "2xl",
      "class": {
        "wrapper": "mt-3 pb-8"
      }
    },
    {
      "orientation": "vertical",
      "size": "3xl",
      "class": {
        "wrapper": "mt-3.5 pb-8.5"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary"
  }
};
const _sfc_main$5 = {
  __name: "UTimeline",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    items: { type: Array, required: true },
    size: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    defaultValue: { type: [String, Number], required: false },
    reverse: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "modelValue": { type: [String, Number] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const modelValue = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.timeline || {} })({
      orientation: props.orientation,
      size: props.size,
      color: props.color,
      reverse: props.reverse
    }));
    const currentStepIndex = computed(() => {
      const value = modelValue.value ?? props.defaultValue;
      if (typeof value === "string") {
        return props.items.findIndex((item) => item.value === value) ?? -1;
      }
      if (props.reverse) {
        return value != null ? props.items.length - 1 - value : -1;
      } else {
        return value ?? -1;
      }
    });
    function getItemState(index) {
      if (currentStepIndex.value === -1) return void 0;
      if (index === currentStepIndex.value) return "active";
      if (props.reverse) {
        return index > currentStepIndex.value ? "completed" : void 0;
      } else {
        return index < currentStepIndex.value ? "completed" : void 0;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<div class="${ssrRenderClass(ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] }))}"${ssrRenderAttr("data-state", getItemState(index))}${_scopeId}><div class="${ssrRenderClass(ui.value.container({ class: [props.ui?.container, item.ui?.container] }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$b$1, mergeProps({
                size: __props.size,
                icon: item.icon
              }, { ref_for: true }, typeof item.avatar === "object" ? item.avatar : {}, {
                class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] }),
                ui: { icon: "text-inherit", fallback: "text-inherit" }
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-indicator` : "indicator", { item }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-indicator` : "indicator", { item })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (index < __props.items.length - 1) {
                _push2(ssrRenderComponent(unref(Separator), {
                  class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] }),
                  orientation: props.orientation
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="${ssrRenderClass(ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] }))}"${_scopeId}>`);
              if (item.date) {
                _push2(`<div class="${ssrRenderClass(ui.value.date({ class: [props.ui?.date, item.ui?.date] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-date` : "date", { item }, () => {
                  _push2(`${ssrInterpolate(item.date)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.title || !!slots.title) {
                _push2(`<div class="${ssrRenderClass(ui.value.title({ class: [props.ui?.title, item.ui?.title] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => {
                  _push2(`${ssrInterpolate(item.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.description || !!slots.description) {
                _push2(`<div class="${ssrRenderClass(ui.value.description({ class: [props.ui?.description, item.ui?.description] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => {
                  _push2(`${ssrInterpolate(item.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                return openBlock(), createBlock("div", {
                  key: item.value ?? index,
                  class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] }),
                  "data-state": getItemState(index)
                }, [
                  createVNode("div", {
                    class: ui.value.container({ class: [props.ui?.container, item.ui?.container] })
                  }, [
                    createVNode(_sfc_main$b$1, mergeProps({
                      size: __props.size,
                      icon: item.icon
                    }, { ref_for: true }, typeof item.avatar === "object" ? item.avatar : {}, {
                      class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] }),
                      ui: { icon: "text-inherit", fallback: "text-inherit" }
                    }), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-indicator` : "indicator", { item })
                      ]),
                      _: 2
                    }, 1040, ["size", "icon", "class"]),
                    index < __props.items.length - 1 ? (openBlock(), createBlock(unref(Separator), {
                      key: 0,
                      class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] }),
                      orientation: props.orientation
                    }, null, 8, ["class", "orientation"])) : createCommentVNode("", true)
                  ], 2),
                  createVNode("div", {
                    class: ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })
                  }, [
                    item.date ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.date({ class: [props.ui?.date, item.ui?.date] })
                    }, [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-date` : "date", { item }, () => [
                        createTextVNode(toDisplayString(item.date), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    item.title || !!slots.title ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: ui.value.title({ class: [props.ui?.title, item.ui?.title] })
                    }, [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    item.description || !!slots.description ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: ui.value.description({ class: [props.ui?.description, item.ui?.description] })
                    }, [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => [
                        createTextVNode(toDisplayString(item.description), 1)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 2)
                ], 10, ["data-state"]);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SeminarsAndTraining",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        date: "Mar 22, 2023",
        title: "Web Development Workshop on Vue.js at DMMMSU",
        description: "I recently conducted a hands-on Vue.js Web Development Workshop at my former university, Don Mariano Marcos Memorial State University (DMMMSU).",
        icon: "i-lucide-rocket"
      },
      {
        date: "Mar 27, 2020",
        title: "MERN Stack Development Training",
        description: "Completed intensive hands-on training focused on building full-stack web applications using MongoDB, Express.js, React, and Node.js, covering both frontend and backend development.",
        icon: "i-lucide-code"
      },
      {
        date: "Mar 10, 2019",
        title: "ICT Summit",
        description: "Attended a professional summit highlighting the latest trends, innovations, and best practices in information and communications technology.",
        icon: "i-lucide-code"
      },
      {
        date: "Mar 08, 2019",
        title: "Hackathon 2019",
        description: "Participated in a collaborative coding competition focused on developing innovative solutions within a limited timeframe.",
        icon: "i-lucide-code"
      },
      {
        date: "Mar 05, 2019",
        title: "Web Design Technology 10th La Union Provincial Skills Olympics 2019",
        description: "Competed in creating responsive and user-friendly web designs, showcasing technical and creative skills in front-end development.",
        icon: "i-lucide-code"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTimeline = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-xl font-semibold">Achivements</h2>`);
      _push(ssrRenderComponent(_component_UTimeline, {
        "default-value": 0,
        items: unref(items),
        class: "w-full lg:w-164 text-sm mt-3"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SeminarsAndTraining.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$4, { __name: "SeminarsAndTraining" });
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-xl font-semibold">Vue.js Workshop at DMMMSU</h2><p class="text-sm mt-2 text-gray-400">March 22, 2023 - I recently conducted a hands-on Vue.js Web Development Workshop at my former university, Don Mariano Marcos Memorial State University (DMMMSU). The session focused on introducing students to modern frontend development using Vue.js, covering essential concepts such as component-based architecture, reactive data binding, and building single-page applications. Participants were guided through practical coding exercises, best practices, and real-world development workflows. It was a great opportunity to give back to the community and inspire future developers in the field of web technologies.</p><div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5"><!--[-->`);
  ssrRenderList(Array(5), (img, i) => {
    _push(`<div class="${ssrRenderClass([{ "col-span-2 row-span-3 h-[340px]": i === 0 }, "group overflow-clip rounded-lg cursor-pointer"])}">`);
    _push(ssrRenderComponent(_component_NuxtImg, {
      src: `/workshop/workshop${i + 1}.webp`,
      fit: "cover",
      alt: "profile-image",
      width: "300",
      height: "300",
      class: "w-full group-hover:scale-125 transition-all duration-200 delay-100"
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VueWorkshop.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]), { __name: "VueWorkshop" });
const _sfc_main$2 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = [
      {
        text: "Working with Alvin has always been a great experience. He’s a reliable and collaborative developer who consistently brings creative solutions to the table. His strong problem-solving skills and willingness to help teammates make him a valuable asset to any project or team.",
        author: "Jonjie Viduya",
        position: "Sr. Fullstack Developer, Pen Brothers",
        avatar: "/testimonials/jonjie.webp"
      },
      {
        text: "Working with Alvin has been a great experience. He’s a reliable software developer who not only writes clean and efficient code but also collaborates well with the team to deliver quality solutions on time.",
        author: "Ryan Bel Soriano",
        position: "Project Manager, DSWD Region 1",
        avatar: "/testimonials/ryan.webp"
      },
      {
        text: "Alvin is a reliable and skilled software developer. He consistently delivered quality work and was always willing to collaborate and share his knowledge with the team.",
        author: "Lawrence Bonilla",
        position: "Frontend Developer, Pilothouse Digital",
        avatar: "/testimonials/lawrence.webp"
      },
      {
        text: "Alvin is a reliable and talented developer. They’re great at solving problems, writing clean code, and working well with the team.",
        author: "Allan Rosero",
        position: "Programmer I, DSWD Region 1",
        avatar: "/testimonials/allan.webp"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-xl font-semibold mb-1"> Testimonials </h2><p class="text-gray-600 mb-7"> What people say about working with me. </p><div class="">`);
      _push(ssrRenderComponent(_component_UCarousel, {
        loop: "",
        arrows: "",
        dots: "",
        "class-names": "",
        class: "max-w-2xl mx-auto",
        autoplay: { delay: 3e3 },
        items: testimonials,
        ui: { item: "base-1 lg:basis-1/2" }
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "background-color": "#03101d" })}" class="rounded-2xl py-4 px-7 shadow-md hover:shadow-lg transition-shadow relative justify-between flex flex-col h-54"${_scopeId}><p class="text-gray-400 text-xs leading-relaxed mb-6"${_scopeId}> &quot;${ssrInterpolate(item.text)}&quot; </p><div class="flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-full overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", item.avatar)}${ssrRenderAttr("alt", item.author)} class="w-full h-full object-cover" loading="lazy"${_scopeId}></div><div${_scopeId}><h4 class="font-semibold text-sm" style="${ssrRenderStyle({ "color": "white" })}"${_scopeId}>${ssrInterpolate(item.author)}</h4><p class="text-gray-400 text-xs"${_scopeId}>${ssrInterpolate(item.position)}</p></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "background-color": "#03101d" },
                class: "rounded-2xl py-4 px-7 shadow-md hover:shadow-lg transition-shadow relative justify-between flex flex-col h-54"
              }, [
                createVNode("p", { class: "text-gray-400 text-xs leading-relaxed mb-6" }, ' "' + toDisplayString(item.text) + '" ', 1),
                createVNode("div", { class: "flex items-center gap-4" }, [
                  createVNode("div", { class: "w-12 h-12 rounded-full overflow-hidden" }, [
                    createVNode("img", {
                      src: item.avatar,
                      alt: item.author,
                      class: "w-full h-full object-cover",
                      loading: "lazy"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", null, [
                    createVNode("h4", {
                      class: "font-semibold text-sm",
                      style: { "color": "white" }
                    }, toDisplayString(item.author), 1),
                    createVNode("p", { class: "text-gray-400 text-xs" }, toDisplayString(item.position), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Reviews",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, status, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/reviews?from=0&to=2", "$Abb0Trjj7x")), __temp = await __temp, __restore(), __temp);
    const reviews = computed(() => data.value.reviews.data);
    computed(() => data.value.reviews.count);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-xl font-semibold mb-1"> Portfolio Reviews </h2><div class="flex justify-between"><p class="text-gray-600 mb-7"> What people say about my portfolio. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/reviews",
        class: "text-secondary text-sm hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View All`);
          } else {
            return [
              createTextVNode("View All")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1"><!--[-->`);
      ssrRenderList(unref(reviews), (review) => {
        _push(`<blockquote class="border-l-2 border-gray-500 italic my-6 pl-4 md:pl-8 py-4 mx-3"><p class="text-[16px] font-normal text-white">${ssrInterpolate(review?.message || "")}</p><div class="${ssrRenderClass([{ "justify-end": review.likes <= 0 }, "flex justify-between"])}"><div style="${ssrRenderStyle(review.likes > 0 ? null : { display: "none" })}" class="flex space-x-2 text-gray-400 text-xs items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:arrow-big-up",
          size: "1.2rem"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(review.likes)} upvotes</span></div><cite class="block text-right mt-4 text-gray-600">- ${ssrInterpolate(review?.reviewed_by || "")}</cite></div></blockquote>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Reviews.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Alvin Laroya Portfolio",
      description: "Results-driven Frontend Developer with 6+ years of experience building modern, high-performance e-commerce platforms. Skilled in Vue/Nuxt, Svelte/SvelteKit, React/Next, and Tailwind CSS. Proven track record in developing responsive, user-centric interfaces and integrating complex systems such as store management tools. Experienced in modernizing legacy applications to improve performance, usability, and efficiency. Passionate about creating innovative digital experiences that align with business goals and drive measurable results."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AboutMe = _sfc_main$c;
      const _component_Experiences = _sfc_main$a;
      const _component_USeparator = _sfc_main$1$1;
      const _component_TechStack = _sfc_main$9;
      const _component_Projects = __nuxt_component_4;
      const _component_SeminarsAndTraining = __nuxt_component_5;
      const _component_VueWorkshop = __nuxt_component_6;
      const _component_Testimonials = _sfc_main$2;
      const _component_Reviews = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 min-h-screen p-4 lg:pr-4 flex flex-col space-y-9" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AboutMe, null, null, _parent));
      _push(ssrRenderComponent(_component_Experiences, null, null, _parent));
      _push(ssrRenderComponent(_component_USeparator, null, null, _parent));
      _push(ssrRenderComponent(_component_TechStack, null, null, _parent));
      _push(ssrRenderComponent(_component_USeparator, null, null, _parent));
      _push(ssrRenderComponent(_component_Projects, null, null, _parent));
      _push(ssrRenderComponent(_component_USeparator, { class: "mt-5" }, null, _parent));
      _push(ssrRenderComponent(_component_SeminarsAndTraining, null, null, _parent));
      _push(ssrRenderComponent(_component_USeparator, null, null, _parent));
      _push(ssrRenderComponent(_component_VueWorkshop, null, null, _parent));
      _push(ssrRenderComponent(_component_USeparator, null, null, _parent));
      _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_USeparator, null, null, _parent));
      _push(ssrRenderComponent(_component_Reviews, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CIO62v7t.mjs.map
